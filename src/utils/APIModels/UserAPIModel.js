const { OkResponseAPIModel } = require('./OkResponseAPIModel');

class UserAPIModel extends OkResponseAPIModel {
  /**
   * Creates a response containing user profile data
   * @param {Object} user
   */
  constructor(user) {
    super();
    this.data = {
      email: user.email,
      name: user.name,
    };
  }
}

module.exports = { UserAPIModel };
