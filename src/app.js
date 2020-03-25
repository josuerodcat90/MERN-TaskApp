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
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

///export app
module.exports = app;
