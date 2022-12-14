const HttpError = require('./HttpError');
const BadRequestError = require('./BadRequestError');
const UnauthorizedError = require('./UnauthorizedError');
const ForbiddenError = require('./ForbiddenError');
const NotFoundError = require('./NotFoundError');
const ConflictError = require('./ConflicError');
const InternalServerError = require('./InternalServerError');

module.exports = {
  HttpError,
  // 4** errors
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  // 5** errors
  InternalServerError,
};
