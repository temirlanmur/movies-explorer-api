const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');
const { MONGO_CONNECTION_STRING, IS_DEVELOPMENT } = require('./environment');
const { requestLogger, errorLogger } = require('./middleware/logger');
const { limiter } = require('./middleware/limiter');
const { cors } = require('./middleware/cors');
const { errorHandler } = require('./middleware/errorHandler');
const { useMainRouter } = require('./routes');
const { MONGO_DB_NAME } = require('./constants');

mongoose.connect(MONGO_CONNECTION_STRING, { dbName: MONGO_DB_NAME });

const app = express();

app.use(helmet());

app.use(requestLogger);

app.use(limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);

if (IS_DEVELOPMENT) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

useMainRouter(app);

app.use(errorLogger);

app.use(errorHandler);

module.exports = { app };
