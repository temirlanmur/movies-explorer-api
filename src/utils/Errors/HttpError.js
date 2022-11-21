/**
 * Base class for custom HTTP errors
 */
class HttpError extends Error {
  /**
   * Creates a generic HTTP error
   * @param {String} message
   */
  constructor(message) {
    super(message);
    this.name = 'HttpError';
  }
}

module.exports = HttpError;
