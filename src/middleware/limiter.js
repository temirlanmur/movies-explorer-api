const rateLimit = require('express-rate-limit');

/**
 * Enables request rate limiter
 */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
});

module.exports = { limiter };
