const { OkResponseAPIModel } = require('./OkResponseAPIModel');

class TokenAPIModel extends OkResponseAPIModel {
  /**
   * Creates a response containing user authorization token
   * @param {String} token
   */
  constructor(token) {
    super();
    this.token = token;
  }
}

module.exports = { TokenAPIModel };
