const { IS_DEVELOPMENT } = require('../environment');

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

const allowedCors = [
  'https://nostalgic.tree.nomoredomains.icu',
];

if (IS_DEVELOPMENT) {
  allowedCors.push('http://localhost:3001');
}

/**
 * Enables CORS protection
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const cors = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const corsHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', corsHeaders);
    res.end();
  } else {
    next();
  }
};

module.exports = { cors };
