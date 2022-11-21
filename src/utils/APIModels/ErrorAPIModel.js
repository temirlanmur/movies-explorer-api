class ErrorAPIModel {
  constructor(message) {
    this.ok = false;
    this.message = message;
  }
}

module.exports = { ErrorAPIModel };
