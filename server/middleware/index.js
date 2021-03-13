require('dotenv').config()
const jwt = require('jsonwebtoken');
const {
    defaultErrorResponse
} = require('../routes');
const { User } = require('../database/schema/users');
const {
    LOGIN_TOKEN,
    REFRESH_TOKEN
} = process.env;

const secret = LOGIN_TOKEN

module.exports.validateToken = async (req, res, next) => {

    jwt.verify(req.headers['authorization'], secret, (err, decoded) => {

        if ( err ) {
    
            defaultErrorResponse(res, err);
    
            return;
    
        };

        req.user = decoded;
    
        next();

    });

};

module.exports.validateAdmin = async ( req, res, next ) => {

    const user = await User.findOne({ _id: req.user._id });
    
    if ( !req.user.isAdmin || (user.isAdmin !== req.user.isAdmin) ) {
        
        const errorMesaage = 'User unauthorized!';

        defaultErrorResponse(res, errorMesaage);
    
            return;

    };

    next();

};