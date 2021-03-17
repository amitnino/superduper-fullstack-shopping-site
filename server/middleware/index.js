require('dotenv').config()
const jwt = require('jsonwebtoken');
const {
    defaultErrorResponse
} = require('../routes');
const { User } = require('../database/schema/users');
const {
    LOGIN_TOKEN
} = process.env;

const secret = LOGIN_TOKEN
const errorMesaage = 'User unauthorized!';
const status = 450;

module.exports.validateToken = async (req, res, next) => {

    jwt.verify(req.headers['authorization'], secret, (err, decoded) => {

        if ( err ) {

            err.unAuth = true;

            defaultErrorResponse(res, err, errorMesaage, status );
            
            return;
            
        };
        
        req.user = decoded;
        
        next();
        
    });
    
};

module.exports.validateAdmin = async ( req, res, next ) => {
    
    const user = await User.findOne({ _id: req.user._id });
    
    if ( !req.user.isAdmin || (user.isAdmin !== req.user.isAdmin) ) {

        const responseBody = {err:true, unAuth: true}

        defaultErrorResponse(res, responseBody , errorMesaage, status );
    
            return;

    };

    next();

};