const router = require('express').Router();
const { defaultErrorResponse, defaultStoreResponse } = require('../');
const { toObjectId } = require('../../database');
const { StoreItem, StoreCategory } = require('../../database/schema/store');
const { validateAdmin } = require('../../middleware');
const { CATEGORYID } = process.env;

router.use('/admin', validateAdmin, require('./adminActions.js'));

router.get('/', async ( req, res ) => {

    try {
      
        const storeCategories = await StoreCategory.find();
        const storeItems = await StoreItem.find().populate(CATEGORYID);

        defaultStoreResponse(res, { storeCategories, storeItems });

        return;

    } catch (error) {
        
        defaultErrorResponse(res, error);

        return;

    };

});
router.get('/items', async ( req, res ) => {

    try {
        
        const storeItems = await StoreItem.find().populate(CATEGORYID);

        defaultStoreResponse(res, { storeItems });

        return;

    } catch (error) {
        
        defaultErrorResponse(res, error);

        return;

    };
});

router.get('/itemId/:itemId', async (req, res) => {
    
    try {
      
        const storeItem = await StoreItem.findOne({ _id: req.params.itemId }).populate( CATEGORYID );

        defaultStoreResponse(res, { storeItem });

        return;
        
    } catch (error) {
        
        defaultErrorResponse(res, error);
        
        return;

    };
    
});

router.get('/categoryId/:categoryId', async ( req, res ) => {
    
    try {
        
        const storeItems = await StoreItem.find({ categoryId: toObjectId(req.params.categoryId) }).populate( CATEGORYID );

        defaultStoreResponse(res, { storeItems });

        return;
        
    } catch (error) {
        
        defaultErrorResponse(res, error);

        return;
        
    };
    
});

router.get('/search/:query', async ( req, res ) => {
    
    try {
        
        const storeItems = await StoreItem.find({ name: req.params.query }).populate(CATEGORYID);

        defaultStoreResponse(res, { storeItems });

        return;
        
    } catch (error) {
        
        defaultErrorResponse(res, error);

        return;
        
    };
    
});



module.exports = router;