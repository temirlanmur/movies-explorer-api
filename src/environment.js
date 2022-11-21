/* eslint-disable no-console */
require('dotenv').config();

const { DEFAULT_MONGO_CONNECTION_STRING, DEV_SECRET } = require('./constants');

/**
 * Imports and checks environment vars
 * @returns environment vars
 */
const _readEnv = () => {
  const {
    MONGO_CONNECTION_STRING: mongoConString,
    JWT_SECRET: jwtSecret,
    NODE_ENV: nodeEnv = 'development',
    PORT: port = 3000,
  } = process.env;

  let _mongoConString = mongoConString;
  if (!mongoConString) {
    _mongoConString = DEFAULT_MONGO_CONNECTION_STRING;
  }

  let _jwtSecret = jwtSecret;
  if (nodeEnv !== 'production') {
    console.log('non-production environment is detected; dev secret will be used');
    _jwtSecret = DEV_SECRET;
  } else if (!jwtSecret) {
    console.log('jwt secret has to be defined in production mode!');
    process.exit(1);
  }

  return {
    MONGO_CONNECTION_STRING: _mongoConString,
    JWT_SECRET: _jwtSecret,
    NODE_ENV: nodeEnv,
    PORT: port,
  };
};

const {
  MONGO_CONNECTION_STRING,
  JWT_SECRET,
  NODE_ENV,
  PORT,
} = _readEnv();

module.exports = {
  MONGO_CONNECTION_STRING,
  JWT_SECRET,
  NODE_ENV,
  PORT,
  IS_DEVELOPMENT: NODE_ENV === 'development',
};
