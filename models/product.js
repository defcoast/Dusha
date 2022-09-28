const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
	title: {
		type:      String,
		required:  true,
		minLength: 3,
		maxLength: 30,
	},
	hex: {
		type:      String,
		required:  true,
		minLength: 3,
		maxLength: 7,
	}
});

const productSchema = new mongoose.Schema({
	title: {
		type:      String,
		required:  true,
		minLength: 3,
		maxLength: 30,
	},
	description: {
		type:      String,
		required:  true,
		minLength: 3,
		maxLength: 300,
	},
	size: {
		type:      String,
		minLength: 1,
		maxLength: 5,
	},
	color: colorSchema,
	isAvailability: {
		type:     Boolean,
		required: true,
	},
	price: {
		type: Number,
	},
	images: [{
		type:    String,
		default: ['default image'],
	}]
});

module.exports = mongoose.model('product', productSchema);
