const HttpError = require('./HttpError');

/**
 * 403 HTTP error
 */
class ForbiddenError extends HttpError {
  /**
   * Creates an instance of 403 HTTP error
   * @param {String} message
   */
  constructor(message) {
    super(message);
    this.name = 'ForbiddenError';
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;
