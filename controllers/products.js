const Products = require('../models/product');

const getProducts = async (req, res) => {
	try {
		const data = await Products.find();
		res.status(200).send(data);
	}
	catch (error) {
		res.send('Ошибка ' + error);
	}
}

const createProducts = async (req, res) => {
	try {
		const {
			title,
			description,
			size,
			color,
			isAvailability,
			price,
			images
		} = req.body;
		console.log(title);

		const data = await Products.create({
			title,
			description,
			size,
			color,
			isAvailability,
			price,
			images
		});

		if (data) {
			res.status(201).send(data);
		}
	}
	catch (error) {
		res.send('Ошибка ' + error);
	}
}

const removeProductsById = async (req, res) => {
	try {
		const product = await Products.findById(req.params.productId)

		if (!product) {
			await Promise.reject(Error('Такой карточки не существует'));
		}
		else {
			const productData = await Products.deleteOne(product)
			res.status(200).send({data: productData});
		}
	}
	catch (error) {
		res.send('Ошибка ' + error);
	}
}

module.exports = {
	getProducts,
	createProducts,
	removeProductsById,
}
