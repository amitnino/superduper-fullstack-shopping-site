const { requiredType, defaultSchemaOptions, Schema, model } = require('../');

const usersSchema = new Schema({

    israeliId: {...requiredType(Number), unique: true},
    username: {...requiredType(String), unique: true},
    password: requiredType(String),
    firstName: requiredType(String),
    lastName: requiredType(String),
    city: requiredType(String),
    street: requiredType(String),
    isAdmin: {...requiredType(Boolean), default: false}
    
}, defaultSchemaOptions);

const User = model('User', usersSchema);

module.exports = { User };