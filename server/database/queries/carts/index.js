const { toObjectId } = require('../../');
const { Cart } = require('../../schema/carts');

module.exports.getCartByUserId = ( userId ) => {

    return Cart.findOne({
        userId: toObjectId(userId),
        isActive: true
    });

};