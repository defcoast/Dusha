const express  = require('express');
const mongoose = require('mongoose');
const app      = express();

const Products = require('./models/product');

const port = 3000;

mongoose.connect('mongodb://localhost:27017/dusha');

app.get('/', (req, res) => {
	res.send('Бэкенд Души');
});

app.get('/getProducts', (req, res) => {
	Products.find({})
	.then(data => res.send(data))
	.catch(error => res.send('ошибочка вышла: ' +  error));
});

app.listen(port, () => {
	console.log(`Приложение работает на порту ${port}`);
});
