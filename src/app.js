const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');
const { MONGO_CONNECTION_STRING, IS_DEVELOPMENT } = require('./environment');
const { cors } = require('./middleware/cors');
const { errorHandler } = require('./middleware/errorHandler');
const { useMainRouter } = require('./routes');

mongoose.connect(MONGO_CONNECTION_STRING);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);

if (IS_DEVELOPMENT) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

useMainRouter(app);

app.use(errorHandler);

module.exports = { app };
