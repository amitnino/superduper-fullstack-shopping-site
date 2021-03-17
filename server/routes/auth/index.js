const router = require('express').Router();
const bcrypt = require('bcrypt');
const {
    User
} = require('../../database/schema/users');
const {
    Cart
} = require('../../database/schema/carts');
const {
    Order
} = require('../../database/schema/orders');
const {
    defaultErrorResponse,
    generateLoginToken
} = require('../');
const {
    SALT_ROUNDS,
    MISSING_INFO,
    WRONG_INFO,
    LOGIN_TOKEN,
} = process.env;

router.post('/register', async (req, res) => {

    try {

        const {
            israeliId,
            username,
            password,
            firstName,
            lastName,
            city,
            street
        } = req.body;

        if (!israeliId || !username || !password || !firstName || !lastName || !city || !street) {

            const msg = MISSING_INFO;

            defaultErrorResponse(res, msg);

            return;

        };

        req.body.password = bcrypt.hashSync(password, parseInt(SALT_ROUNDS));

        const queryResult = await User.exists({
            israeliId,
            username
        });

        if (queryResult) {

            const msg = 'Username or Israeli Id already in use';

            defaultErrorResponse(res, msg);

            return;

        } else {

            await User.create(req.body);

        };

        const response = {

            err: false,
            msg: `${firstName} ${lastName} has been Registered`

        };

        res.json(response);

    } catch (error) {

        defaultErrorResponse(res, error);

        return;

    };
});

router.post('/register/validateUser', async (req, res) => {

    try {

        const matchIsraeliId = await User.exists({ israeliId: req.body.israeliId });
        const matchUsername = await User.exists({ username: req.body.username });

        

        const response = {

            err: (matchIsraeliId || matchUsername),
            msg: `Username or Israeli Id ${ (matchIsraeliId || matchUsername) ? 'already' : 'is not'} in use`

        }

        res.json(response)

    } catch (error) {

        defaultErrorResponse(res, error);

        return;

    };

});

router.post('/login', async (req, res) => {

    try {

        const {
            username,
            password
        } = req.body;

        if (!username || !password) {

            defaultErrorResponse(res, MISSING_INFO);

            return;

        };

        const user = await User.findOne({
            username
        });

        if (!user) {

            defaultErrorResponse(res, WRONG_INFO);

            return;

        };

        const match = await bcrypt.compare(password, user.password);

        if (!match) {

            defaultErrorResponse(res, WRONG_INFO);

            return;

        };
        
        const loginToken = await generateLoginToken(user._id, LOGIN_TOKEN);
        
        const response = {
            
            err: false,
            msg: `Welcome, ${user.firstName} ${user.lastName}`,
            loginToken,
            
        };

        if ( !user.isAdmin ) {

            response.cart = await Cart.findOne({ userId: user._id, isActive: true });

        };

        res.json(response);

    } catch (error) {

        defaultErrorResponse(res, error);

        return;

    };

});

module.exports = router;