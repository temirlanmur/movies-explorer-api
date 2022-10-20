const { OkResponseAPIModel } = require('./OkResponseAPIModel');
const { createMovieApiModel } = require('./utils');

class MovieAPIModel extends OkResponseAPIModel {
  /**
   * Creates a response containing single movie data
   * @param {Object} movie
   */
  constructor(movie) {
    super();
    this.data = createMovieApiModel(movie);
  }
}

module.exports = { MovieAPIModel };
