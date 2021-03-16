const { requiredType, defaultSchemaOptions, Schema, model } = require('../');
const { Cart } = require('./carts');
const { User } = require('./users');

const ordersSchema = new Schema({

    city: requiredType(String),
    street: requiredType(String),
    delieveryDate: requiredType(Date),
    creditCard: requiredType(String),
    cartId: {...requiredType(String), ref:Cart },
    userId: {...requiredType(String), ref:User }

}, {...defaultSchemaOptions, timestamps: true});

ordersSchema.pre('save', async function(){

    const cart = await Cart.findById(this.cartId);
    cart.isActive = false;
    await cart.save();

});

const Order = model('Order', ordersSchema);

module.exports = { Order };