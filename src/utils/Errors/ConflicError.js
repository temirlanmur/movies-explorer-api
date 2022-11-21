const HttpError = require('./HttpError');

/**
 * 409 HTTP error
 */
class ConflictError extends HttpError {
  /**
   * Creates an instance of 409 HTTP error
   * @param {String} message
   */
  constructor(message) {
    super(message);
    this.name = 'ConflictError';
    this.statusCode = 409;
  }
}

module.exports = ConflictError;
