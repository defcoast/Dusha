const router   = require('express').Router();

const {
	getProducts,
	createProducts,
	removeProductsById,
} = require('../controllers/products.js');

router.get('/products', getProducts);
router.post('/products', createProducts);
router.delete('/products/:productId',removeProductsById);

module.exports = router;
