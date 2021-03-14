const { requiredType, defaultSchemaOptions, Schema, model, toObjectId } = require('../');
const { StoreItem } = require('../schema/store');
const { User } = require('../schema/users');

const totalPriceOptions = {type: Number, default: 0};
const defaultSchemaOptionsWithTimestamps = {...defaultSchemaOptions, timestamps: true}

const cartItemsSchema = new Schema({
    
    amount: requiredType(Number),
    storeItemId: {...requiredType(toObjectId), ref: StoreItem },
    totalPrice: totalPriceOptions

}, defaultSchemaOptionsWithTimestamps );

cartItemsSchema.pre('save', async function(){
    const storeItem = await StoreItem.findById(this.storeItemId);
    this.totalPrice = storeItem.price * this.amount;
});

const cartsSchema = new Schema({

    totalPrice: totalPriceOptions,
    isActive: { type: Boolean, default: true},
    userId: {...requiredType(toObjectId), ref: User },
    cartItems:[cartItemsSchema]

}, defaultSchemaOptionsWithTimestamps );

cartsSchema.pre('save', function(){
    if (this.cartItems.length){
        this.totalPrice = 0;
        this.cartItems.forEach( ci=>{
            this.totalPrice += ci.totalPrice;
        });
    };
});
 
const Cart = model('Cart', cartsSchema);

module.exports = { Cart };