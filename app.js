const express = require('express');
const app     = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('Бэкенд Души');
});

app.listen(port, () => {
	console.log(`Приложение работает на порту ${port}`);
});
