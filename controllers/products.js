const Products = require('../models/product');

const getProducts = async (req, res) => {



	try {
		const data = await Products.find();
		res.status(200).send(data);
	} catch (error) {
		res.send('Ошибка ' + error);
	}
}

module.exports = {
	getProducts,
}
