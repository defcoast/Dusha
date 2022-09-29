const router   = require('express').Router();

const {getProducts} = require('../controllers/products.js');

router.get('/getProducts', getProducts);

module.exports = router;
