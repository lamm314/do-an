const router = require("express").Router();
const productRouter = require('./product');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const userRouter = require('./user');
const authRouter = require('./auth');
const paymetnRouter = require('./payment');

router.use('/products',productRouter);
router.use('/cart',cartRouter);
router.use('/orders',orderRouter);
router.use('/users',userRouter);
router.use('/auth',authRouter);
router.use('/payments',paymetnRouter);


module.exports = router;