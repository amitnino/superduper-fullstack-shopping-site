const {
    defaultErrorResponse
} = require('..');
const {
    Order
} = require('../../database/schema/orders');
const {
    MISSING_INFO,
    CARTID,
    CART
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

            defaultErrorResponse(res, MISSING_INFO)
            return;

        };

        const newDate = new Date(1616277600000);

        const order = new Order({
            ...req.body,
            delieveryDate: newDate,
            userId: req.user._id
        });

        await order.save();

        res.json({
            err: false,
            order,
            msg: 'order created successfully'
        });

    } catch (error) {

        defaultErrorResponse(res, error);
        console.log(error)

        return;

    };

});

module.exports = router;