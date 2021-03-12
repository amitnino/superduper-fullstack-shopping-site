const router = require('express').Router();
const {
    toObjectId
} = require('../../database')
const {
    defaultErrorResponse,
    defaultCartResponse
} = require('../')
const {
    Cart
} = require('../../database/schema/carts');
const {
    StoreItem
} = require('../../database/schema/store');
const {
    getCartByUserId
} = require('../../database/queries/carts')

router.get('/new', async (req, res) => {

    try {

        const cart = new Cart({
            userId: toObjectId(req.user._id)
        });

        cart.save();

        defaultCartResponse(res, cart, 'Cart created')

        return;

    } catch (error) {

        defaultErrorResponse(res, error);

        return;

    };

});

router.get('/open', async (req, res) => {

    try {

        const cart = await getCartByUserId(req.user._id);

        defaultCartResponse(res, cart, '')

        return;

    } catch (error) {

        defaultErrorResponse(res, error);

        return;

    }

});

router.post('/add', async (req, res) => {

    try {

        const {
            storeItemId,
            amount
        } = req.body;

        const cart = await getCartByUserId(req.user._id);

        const storeItem = await StoreItem.findOne({
            _id: toObjectId(storeItemId)
        });

        await cart.cartItems.push({
            storeItem,
            amount
        });

        await cart.save();

        defaultCartResponse(res, cart, 'Item added to cart successfully');

        return;

    } catch (error) {

        defaultErrorResponse(res, error);

        return;

    };

});

router.put('/amount', async (req, res) => {

    try {

        const {
            amount,
            cartItemId
        } = req.body;

        const cart = await getCartByUserId(req.user._id);

        const cartItem = cart.cartItems.id(cartItemId);

        cartItem.amount = amount;

        await cart.save();

        const newCart = await getCartByUserId(req.user._id);

        defaultCartResponse(res, newCart, 'Item amount changed successfully');

        return;

    } catch (error) {

        defaultErrorResponse(res, error);

        return;

    };

});

router.delete('/remove/:cartItemId', async (req, res) => {

    try {

        const cart = await getCartByUserId(req.user._id);

        cart.cartItems.remove({
            _id: req.params.cartItemId
        });

        cart.totalPrice = cart.cartItems.length && cart.totalPrice;

        await cart.save();

        defaultCartResponse(res, cart, 'Item removed successfully');

        return;

    } catch (error) {

        defaultErrorResponse(res, error);

        return;

    };

});

router.delete('/reset', async (req, res) => {

    try {

        const cart = await getCartByUserId(req.user._id);

        cart.cartItems = new Array();

        cart.totalPrice = 0;

        await cart.save();

        defaultCartResponse(res, cart, 'Cart reset successfully');

        return;

    } catch (error) {

        defaultErrorResponse(res, error)

        return;

    };

});

module.exports = router;