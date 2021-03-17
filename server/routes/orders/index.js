const {
    defaultErrorResponse, generateLoginToken
} = require('..');
const {
    Order
} = require('../../database/schema/orders');
const {
    MISSING_INFO,
    CARTID,
    CART,
    LOGIN_TOKEN
} = process.env;

const router = require('express').Router();

router.get('/', async (req, res) => {

    try {

        const orders = await Order.find({
            userId: req.user._id
        }).populate({
            path: CARTID,
            model: CART,
            populate: {
                path: 'cartItems.storeItemId',
                model: 'StoreItem'
            }
        });

        res.json({
            err: false,
            orders
        });

    } catch (error) {

        defaultErrorResponse(res, error);

        return;

    }

});

router.post('/new', async (req, res) => {

    try {

        const {
            city,
            street,
            delieveryDate,
            creditCard,
            cartId
        } = req.body;

        if (!city || !street || !delieveryDate || !creditCard || !cartId) {

            defaultErrorResponse(res, MISSING_INFO);
            return;

        };

        const order = new Order({
            ...req.body,
            userId: req.user._id
        });

        await order.save();

        const loginToken = await generateLoginToken(req.user._id, LOGIN_TOKEN);

        res.json({
            err: false,
            msg: 'Order created successfully',
            order,
            loginToken,
        });

    } catch (error) {

        defaultErrorResponse(res, error);
        console.log(error);

        return;

    };

});

module.exports = router;