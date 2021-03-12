const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then( result => console.log('[SERVER] connected to db') )
.catch( error => console.log(error) );

module.exports.Schema = mongoose.Schema;

module.exports.model = mongoose.model;

module.exports.toObjectId = mongoose.Types.ObjectId;

module.exports.defaultSchemaOptions = { versionKey: false };

module.exports.requiredType = ( type ) => {
    return {
        type, required: true
    };
};