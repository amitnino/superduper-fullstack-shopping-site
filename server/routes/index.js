const jwt = require('jsonwebtoken');

module.exports.defaultErrorResponse = ( res, msg, error, status= 500 ) => {

    const responseMessage = '[SERVER] : ' + msg ? msg : error;

    return res.status(status).json({err:true, msg:'[SERVER] '+ responseMessage });

};

module.exports.defaultStoreResponse = ( res, values ) => {
    
    const response = {
        
        err: false,
        ...values
        
    };
    
    res.json(response);

};

module.exports.defaultCartResponse = (res, cart, msg) => {

    const response = {

        err: false,
        msg,
        cart

    };

    return res.json(response);

};

module.exports.generateLoginToken = async ( userId, secret ) => {

    const { Order } = require('../database/schema/orders');
    const { User } = require('../database/schema/users');

    const user = await User.findById(userId);

    const { _id, firstName, lastName, city, street, isAdmin, username } = user;

        const fullName = firstName + ' ' + lastName;

        const loginTokenData = {

            _id,
            username,
            fullName,
            isAdmin,
            city,
            street,

        };

        if ( !isAdmin ){

            loginTokenData.lastOrder = await Order.find({userId: _id}).sort({createdAt: 'desc'}).limit(1);
            loginTokenData.numberOfOrders = await Order.countDocuments({userId: _id});
            
        };

    return jwt.sign(loginTokenData, secret, { expiresIn: '1h' });

};