/**
 * Given a movie, returns its API representation
 * @param {Object} movie
 * @returns API model /movie
 */
const createMovieApiModel = (movie) => {
  const model = {};

  model.id = movie._id;
  model.country = movie.country;
  model.director = movie.director;
  model.duration = movie.duration;
  model.year = movie.year;
  model.description = movie.description;
  model.image = movie.image;
  model.trailerLink = movie.trailerLink;
  model.thumbnail = movie.thumbnail;
  model.owner = movie.owner;
  model.movieId = movie.movieId;
  model.nameRU = movie.nameRU;
  model.nameEN = movie.nameEN;

  return model;
};

module.exports = { createMovieApiModel };
