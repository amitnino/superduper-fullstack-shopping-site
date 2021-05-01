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
        console.log(error)

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
        console.log(error)

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

        const cartItemExists = await cart.cartItems.filter(cartItem => cartItem.storeItemId._id == storeItemId);

        if (cartItemExists.length) {

            const cartItem = await cart.cartItems.id(cartItemExists[0]._id);

            cartItem.amount += amount;
            
            console.log(cartItem);

        } else {

            await cart.cartItems.push({
                storeItemId,
                amount
            });

        };

        await cart.save();

        const newCart = await getCartByUserId(req.user._id);

        defaultCartResponse(res, newCart, 'Item added to cart successfully');

        return;

    } catch (error) {

        defaultErrorResponse(res, error);
        console.log(error)

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
        console.log(error)

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
        console.log(error)

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

        defaultErrorResponse(res, error);
        console.log(error)

        return;

    };

});

module.exports = router;