const router = require("express").Router();
const {
    processVnpay,
} = require('../controller/payment.controller');

router.get('/vnpay_return', processVnpay)
module.exports = router;