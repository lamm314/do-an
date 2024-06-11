const moment = require('moment');
const querystring = require('qs');

const vnpayConfig = require('../config/vnpay');

const {
  updateOrderPaid,
  getOrderById
} = require('../db/orders.db');
const { encode } = require('punycode');

const sortObject = (obj) => {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }
  return sorted;
}

const createPaymentURL = async (req, orderId) => {
  process.env.TZ = 'Asia/Ho_Chi_Minh';

  const order = await getOrderById(orderId);

  let date = new Date();
  let createDate = moment(date).format('YYYYMMDDHHmmss');

  let ipAddr = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  let tmnCode = vnpayConfig.vnp_TmnCode;
  let secretKey = vnpayConfig.vnp_HashSecret;
  let vnpUrl = vnpayConfig.vnp_Url;
  let returnUrl = vnpayConfig.vnp_ReturnUrl;
  let vnp_TxnRef = `${moment(date).format('DDHHmmss')}_${orderId}`;
  let amount = order.total;
  let currCode = 'VND';
  let vnp_Params = {};
  vnp_Params['vnp_Version'] = '2.1.1';
  vnp_Params['vnp_Command'] = 'pay';
  vnp_Params['vnp_TmnCode'] = tmnCode;
  vnp_Params['vnp_Locale'] = 'vn';
  vnp_Params['vnp_CurrCode'] = currCode;
  vnp_Params['vnp_TxnRef'] = vnp_TxnRef;
  vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD: ' + vnp_TxnRef;
  vnp_Params['vnp_OrderType'] = 'other';
  vnp_Params['vnp_Amount'] = amount * 100;
  vnp_Params['vnp_ReturnUrl'] = returnUrl;
  vnp_Params['vnp_IpAddr'] = ipAddr;
  vnp_Params['vnp_CreateDate'] = createDate;
  vnp_Params['vnp_ExpireDate'] = moment(date).add(15, 'minute').format('YYYYMMDDHHmmss');

  vnp_Params = sortObject(vnp_Params);

  let signData = querystring.stringify(vnp_Params, { encode: false });
  let crypto = require("crypto");
  let hmac = crypto.createHmac("sha512", secretKey);
  let signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
  vnp_Params['vnp_SecureHash'] = signed;
  vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

  return vnpUrl;
}

const processPaymentService = async (req) => {
  let vnp_Params = req.query;

  let secureHash = vnp_Params['vnp_SecureHash'];

  delete vnp_Params['vnp_SecureHash'];
  delete vnp_Params['vnp_SecureHashType'];

  vnp_Params = sortObject(vnp_Params);

  let tmnCode = vnpayConfig.vnp_TmnCode;
  let secretKey = vnpayConfig.vnp_HashSecret;

  let querystring = require('qs');
  let signData = querystring.stringify(vnp_Params, { encode: false });
  let crypto = require("crypto");
  let hmac = crypto.createHmac("sha512", secretKey);
  let signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");

  const orderID = vnp_Params['vnp_TxnRef'].split('_')[1];

  if (secureHash === signed) {
    if (vnp_Params['vnp_ResponseCode'] == '00') {
      await updateOrderPaid(orderID, 1);
    } else {
      await updateOrderPaid(orderID, 0);
      throw new Error('Thanh toán không thành công!');
    }
  } else {
    throw new Error('Có lỗi xảy ra trong quá trình thanh toán (Chữ ký không hợp lệ)');
  }
}

module.exports = {
  createPaymentURL,
  processPaymentService
}