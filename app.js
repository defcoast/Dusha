const express  = require('express');
const mongoose = require('mongoose');
const app      = express();
const router   = require('./routes');
const cors     = require('cors');
const bodyParser = require("body-parser");

const port = 3000;

mongoose.connect('mongodb://localhost:27017/dusha');

app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.send('Бэкенд Души');
});

app.use(cors({
	origin: '*',
}));

app.use(router);

app.listen(port, () => {
	console.log(`Приложение работает на порту ${port}`);
});
