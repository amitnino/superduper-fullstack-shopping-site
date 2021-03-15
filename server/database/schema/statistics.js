const {
    requiredType,
    defaultSchemaOptions,
    Schema,
    model
} = require('../');

const statisticsSchema = new Schema({

    numberOfUsers: {
        ...requiredType(Number),
        default: 0
    },
    numberOfBeerTypes: {
        ...requiredType(Number),
        default: 0
    },
    numberOfStoreItems: {
        ...requiredType(Number),
        default: 0
    },
    numberOfOrdersPlaced: {
        ...requiredType(Number),
        default: 0
    },

}, {
    ...defaultSchemaOptions,
    timestamps: true
});

const Statistics = model('Statistics', statisticsSchema);

module.exports = {
    Statistics
};