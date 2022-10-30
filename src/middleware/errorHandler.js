const { isCelebrateError } = require('celebrate');
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
  } else if (isCelebrateError(error)) {
    // Handle celebrate errors
    try {
      let reason = '';
      error.details.forEach((value) => {
        reason = `: ${value.details[0].message}`;
      });
      const message = MSGS.VALIDATION_ERROR + reason;
      res.status(400).send(new ErrorAPIModel(message));
    } catch (err) {
      res.status(500).send(new ErrorAPIModel(MSGS.SOMETHING_WENT_WRONG));
    }
  } else if (error instanceof HttpError) {
    res.status(error.statusCode).send(new ErrorAPIModel(error.message));
  } else {
    res.status(500).send(new ErrorAPIModel(MSGS.SOMETHING_WENT_WRONG));
  }
};

module.exports = { errorHandler };
