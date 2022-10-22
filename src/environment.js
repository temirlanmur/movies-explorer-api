/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
require('dotenv').config();

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

  if (!mongoConString) {
    console.log('mongo connection string is not defined!');
    process.exit(1);
  }

  let _jwtSecret = jwtSecret;
  if (nodeEnv !== 'production') {
    console.log('non-production environment is detected; dev secret will be used');
    _jwtSecret = 'dev-secret';
  } else if (!jwtSecret) {
    console.log('jwt secret has to be defined in production mode!');
    process.exit(1);
  }

  return {
    MONGO_CONNECTION_STRING: mongoConString,
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
};
