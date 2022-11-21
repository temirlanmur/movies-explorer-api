const { NotFoundError } = require('../utils/Errors');
const { API_MESSAGES: MSGS } = require('../constants');

/**
 * Handles requests to non-existing routes
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const notFoundHandler = (req, res, next) => {
  next(new NotFoundError(MSGS.RESOURCE_NONEXISTENT));
};

module.exports = { notFoundHandler };
