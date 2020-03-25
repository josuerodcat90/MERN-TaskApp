const express = require('express');
const cors = require('cors');
const app = express();

///settings
const PORT = process.env.PORT || 5000;
app.set('port', PORT);

///middlewares
app.use(cors());
app.use(express.json());

///routes
app.get('/api/users', (req, res) => {
	res.send('Users Routes!');
});
app.get('/api/notes', (req, res) => {
	res.send('Notes Routes!');
});

///export app
module.exports = app;
