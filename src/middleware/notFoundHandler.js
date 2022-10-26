const { NotFoundError } = require('../utils/Errors');

/**
 * Handles requests to non-existing routes
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const notFoundHandler = (req, res, next) => {
  next(new NotFoundError());
};

module.exports = { notFoundHandler };
