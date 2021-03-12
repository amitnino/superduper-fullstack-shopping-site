const jwt = require('jsonwebtoken');

module.exports.defaultErrorResponse = ( res, msg, error ) => {

    const responseMessage = '[SERVER] : ' + msg ? msg : error;

    return res.status(500).json({err:true, msg:'[SERVER] '+ responseMessage });

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

module.exports.generateLoginToken = ( payload, secret ) => {

    return jwt.sign(payload, secret, { expiresIn: '30min' });

};

module.exports.generateRefreshToken = ( payload, secret ) => {

    return jwt.sign(payload, secret, { expiresIn: '1day' });

};