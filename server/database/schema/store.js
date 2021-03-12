const { model, Schema, requiredType, defaultSchemaOptions, toObjectId } = require('../');

const storeCategoriesSchema = new Schema({

    name: requiredType(String)
    
}, defaultSchemaOptions);

const StoreCategory = model('StoreCategory', storeCategoriesSchema);

const storeItemsSchema = new Schema({

    name: requiredType(String),
    price: requiredType(Number),
    picture: requiredType(String),
    categoryId: {...requiredType(toObjectId), ref: StoreCategory }

}, defaultSchemaOptions);

const StoreItem = model('StoreItem', storeItemsSchema );


module.exports = { StoreItem, StoreCategory, storeItemsSchema };