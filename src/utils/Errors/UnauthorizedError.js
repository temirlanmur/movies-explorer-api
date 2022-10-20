const HttpError = require('./HttpError');

/**
 * 401 HTTP error
 */
class UnauthorizedError extends HttpError {
  /**
   * Creates an instance of 401 HTTP error
   * @param {String} message
   */
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
