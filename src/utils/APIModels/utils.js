/**
 * Given a movie, returns its representation with a minimal # of fields (needed for a collection)
 * @param {Object} movie
 * @returns API model /movies
 */
const createListMovieApiModel = (movie) => {
  const model = {};

  model.duration = movie.duration;
  model.year = movie.year;
  model.description = movie.description;
  model.image = movie.image;
  model.thumbnail = movie.thumbnail;
  model.nameRU = movie.nameRU;
  model.nameEN = movie.nameEN;

  return model;
};

/**
 * Given a movie, returns its full representation
 * @param {Object} movie
 * @returns API model /movie
 */
const createMovieApiModel = (movie) => {
  const model = createListMovieApiModel(movie);

  model.country = movie.country;
  model.director = movie.director;
  model.trailerLink = movie.trailerLink;
  model.owner = movie.owner;
  model.movieId = movie.movieId;

  return model;
};

module.exports = { createListMovieApiModel, createMovieApiModel };
