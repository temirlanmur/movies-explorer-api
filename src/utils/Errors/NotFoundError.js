const HttpError = require('./HttpError');

/**
 * 404 HTTP error
 */
class NotFoundError extends HttpError {
  /**
   * Creates an instance of 404 HTTP error
   * @param {String} message
   */
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
