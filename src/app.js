require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { useMainRouter } = require('./routes');
const { errorHandler } = require('./middleware/errorHandler');

const { MONGO_CONNECTION_STRING, NODE_ENV = 'development', PORT = 3000 } = process.env;

if (!MONGO_CONNECTION_STRING) {
  // eslint-disable-next-line no-console
  console.log('mongo connection string is not found!');
  process.exit(1);
}

mongoose.connect(MONGO_CONNECTION_STRING);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

useMainRouter(app);

app.use(errorHandler);

module.exports = { app, NODE_ENV, PORT };
