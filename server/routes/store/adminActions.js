const router = require('express').Router();
const { defaultErrorResponse } = require('../');
const { toObjectId } = require('../../database');
const { StoreItem } = require('../../database/schema/store');
const { ITEM_NAME_TAKEN, MISSING_INFO, CATEGORYID } = process.env;

router.post('/add', async ( req, res ) => {
    
    try {

        const { name, categoryId, price, picture } = req.body;

        if ( !name || !categoryId || !price || !picture ) {

            defaultErrorResponse(res, MISSING_INFO);

            return;

        };

        const queryResult = await StoreItem.exists({ name });
        
        if ( queryResult ) {

            defaultErrorResponse(res, ITEM_NAME_TAKEN);

            return;

        };

        await StoreItem.create({...req.body, categoryId: toObjectId(categoryId)});

        const storeItems = await StoreItem.find().populate(CATEGORYID);

        const response = {

            err: false,
            msg: name + ' successfully added to store',
            storeItems

        };

        res.json(response);
        
    } catch (error) {

        defaultErrorResponse(res, error);
        
    };

});

router.post('/edit', async ( req, res ) => {

    try {

    const { _id, name, categoryId, price, picture } = req.body;

    if ( !_id || !name || !categoryId || !price || !picture ) {

        defaultErrorResponse(res, MISSING_INFO);

        return;

    };

    await StoreItem.findOneAndUpdate({ _id: toObjectId(_id) }, {name, categoryId, price, picture});

    const storeItems = await StoreItem.find();

    const response = {

        err: false,
        msg: `${_id}: ${name} successfully Updated`,
        storeItems

    };

    res.json(response);
        
    } catch (error) {

        defaultErrorResponse(res, error);
        
    };

});


module.exports = router;