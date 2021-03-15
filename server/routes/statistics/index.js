const router = require('express').Router();
const {
    defaultErrorResponse
} = require('..');
const {
    Statistics
} = require('../../database/schema/statistics');
const {
    User
} = require('../../database/schema/users');
const {
    StoreItem
} = require('../../database/schema/store');
const {
    Order
} = require('../../database/schema/orders');

router.get('/', async (req, res) => {

    try {

        const statistics = await Statistics.findOne();

        const numberOfUsers = await User.find();
        const numberOfBeerTypes = await StoreItem.find({
            categoryId: "6032ddb087d80209ecd7eb28"
        });
        const numberOfStoreItems = await StoreItem.find();
        const numberOfOrdersPlaced = await Order.find();

        statistics.numberOfUsers = numberOfUsers.length;
        statistics.numberOfBeerTypes = numberOfBeerTypes.length;
        statistics.numberOfStoreItems = numberOfStoreItems.length;
        statistics.numberOfOrdersPlaced = numberOfOrdersPlaced.length;

        res.json({
            err: false,
            statistics
        });

    } catch (error) {

        defaultErrorResponse(res, error);

        return;

    };

});

module.exports = router;