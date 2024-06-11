const querystring = require('querystring');

const { ErrorHandler } = require('../helpers/errors');
const appConfig = require('../config/app');
const { processPaymentService } = require('../service/vnpay.service');

const processVnpay = async (req, res) => {
    try {
        await processPaymentService(req);
        return res.redirect(`${appConfig.front_end_url}/orders-history`);
    } catch (error) {
        console.log(error);
        throw new ErrorHandler(400, error.message)
    }
}

module.exports = {
    processVnpay,
}