const MONGO_DB_NAME = 'moviesdb';
const DEFAULT_MONGO_CONNECTION_STRING = `mongodb://localhost:27017/${MONGO_DB_NAME}`;
const DEV_SECRET = 'dev-secret';
const API_MESSAGES = {
  ID_INCORRECT_FORMAT: 'Incorrect format of the document id',
  NOT_ALLOWED: 'Not enough rights to delete the document',
  DOCUMENT_NOT_FOUND: 'Cannot find the document',
  USER_NOT_FOUND: 'Cannot find the user',
  VALIDATION_ERROR: 'Some of the fields are invalid',
  LOGIN_ERROR: 'Either user email, or password is invalid',
  CONFLICT_ERROR: 'User with the given email already exists',
  TOKEN_MISS_INVALID: 'Access token is missing or invalid',
  RESOURCE_NONEXISTENT: 'The resource does not exist',
  SOMETHING_WENT_WRONG: 'Something went wrong :(',
};

module.exports = {
  MONGO_DB_NAME,
  DEFAULT_MONGO_CONNECTION_STRING,
  DEV_SECRET,
  API_MESSAGES,
};
