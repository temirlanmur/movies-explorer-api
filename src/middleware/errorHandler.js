const { ErrorAPIModel } = require('../utils/APIModels');
const { HttpError } = require('../utils/Errors');
const { API_MESSAGES: MSGS } = require('../constants');

/**
 * Handles errors
 * @param {Exception} error
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    next(error);
  } else if (error instanceof HttpError) {
    res.status(error.statusCode).send(new ErrorAPIModel(error.message));
  } else {
    res.status(500).send(new ErrorAPIModel(MSGS.SOMETHING_WENT_WRONG));
  }
};

module.exports = { errorHandler };
