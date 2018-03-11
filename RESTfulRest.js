const express = require('express');
const sayings = require('./quotes.json');

const app = express();

app.get('/', function(req, res) {
	const random = Math.floor(Math.random() * sayings.length);
	const prettified = JSON.stringify(sayings[random], null, 2);
	res.send('<pre>' + prettified + '</pre>');
});

app.listen(3000);