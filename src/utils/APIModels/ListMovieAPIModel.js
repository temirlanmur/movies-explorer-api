const { OkResponseAPIModel } = require('./OkResponseAPIModel');
const { createMovieApiModel } = require('./utils');

class ListMovieAPIModel extends OkResponseAPIModel {
  /**
   * Creates a response containing several movies data
   * @param {Array} moviesArray
   */
  constructor(moviesArray) {
    super();
    this.data = moviesArray.map((movie) => createMovieApiModel(movie));
  }
}

module.exports = { ListMovieAPIModel };
