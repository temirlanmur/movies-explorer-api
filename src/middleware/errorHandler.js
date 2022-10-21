const { ErrorAPIModel } = require('../utils/APIModels');
const { HttpError } = require('../utils/Errors');

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
    res.status(error.statusCode).send(new ErrorAPIModel());
  } else {
    res.status(500).send(new ErrorAPIModel());
  }
};

module.exports = { errorHandler };
