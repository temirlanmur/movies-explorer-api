const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../utils/Errors');

const { JWT_SECRET, NODE_ENV } = process.env;

const secret = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';

/**
 * Enables authorization
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError());
  } else {
    const token = authorization.replace('Bearer ', '');
    let payload;
    try {
      payload = jwt.verify(token, secret);
    } catch (error) {
      next(new UnauthorizedError());
      return;
    }
    req.user = payload;
    next();
  }
};

module.exports = { auth };
