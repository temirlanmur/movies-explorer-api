const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { useMainRouter } = require('./routes');
const { errorHandler } = require('./middleware/errorHandler');

const { MONGO_CONNECTION_STRING } = require('./environment');

mongoose.connect(MONGO_CONNECTION_STRING);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

useMainRouter(app);

app.use(errorHandler);

module.exports = { app };
