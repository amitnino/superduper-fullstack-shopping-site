const { toObjectId } = require('../../');
const { Cart } = require('../../schema/carts');
const { StoreItem } = require('../../schema/store')

module.exports.getCartByUserId = ( userId ) => {

    return Cart.findOne({
        userId: toObjectId(userId),
        isActive: true
    }).populate('cartItems.storeItemId', StoreItem);

};