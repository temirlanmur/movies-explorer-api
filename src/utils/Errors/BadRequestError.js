const HttpError = require('./HttpError');

/**
 * 400 HTTP error
 */
class BadRequestError extends HttpError {
  /**
   * Creates an instance of 400 HTTP error
   * @param {String} message
   */
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;
