const HttpError = require('./HttpError');

/**
 * 500 HTTP error
 */
class InternalServerError extends HttpError {
  /**
   * Creates an instance of 500 HTTP error
   * @param {String} message
   */
  constructor(message) {
    super(message);
    this.name = 'InternalServerError';
    this.statusCode = 500;
  }
}

module.exports = InternalServerError;
