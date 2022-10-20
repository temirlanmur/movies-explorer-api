const { OkResponseAPIModel } = require('./OkResponseAPIModel');
const { createListMovieApiModel } = require('./utils');

class ListMovieAPIModel extends OkResponseAPIModel {
  /**
   * Creates a response containing several movies data
   * @param {Array} moviesArray
   */
  constructor(moviesArray) {
    super();
    this.data = moviesArray.map((movie) => createListMovieApiModel(movie));
  }
}

module.exports = { ListMovieAPIModel };
