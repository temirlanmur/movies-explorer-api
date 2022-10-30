const { Error: MongooseError } = require('mongoose');
const { Movie } = require('../models/Movie');
const { ForbiddenError, NotFoundError, BadRequestError } = require('../utils/Errors');
const { ListMovieAPIModel, MovieAPIModel, OkResponseAPIModel } = require('../utils/APIModels');
const { API_MESSAGES: MSGS } = require('../constants');

/**
 * Gets the movies saved by the user
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const getMovies = async (req, res, next) => {
  const userId = req.user._id;
  try {
    const movies = await Movie.find({ owner: userId });
    res.send(new ListMovieAPIModel(movies));
  } catch (error) {
    next(error);
  }
};

/**
 * Creates a new movie
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const createMovie = async (req, res, next) => {
  const { ...movieData } = req.body;
  const userId = req.user._id;
  try {
    const movie = await Movie.create({ ...movieData, owner: userId });
    res.send(new MovieAPIModel(movie));
  } catch (error) {
    if (error instanceof MongooseError.ValidationError) {
      next(new BadRequestError(MSGS.VALIDATION_ERROR));
    } else next(error);
  }
};

/**
 * Deletes a movie by id
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const deleteMovie = async (req, res, next) => {
  const { movieId } = req.params;
  const userId = req.user._id;
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) throw new NotFoundError(MSGS.DOCUMENT_NOT_FOUND);
    if (movie.owner.toString() !== userId) throw new ForbiddenError(MSGS.NOT_ALLOWED);
    await Movie.deleteOne({ _id: movieId });
    res.send(new OkResponseAPIModel());
  } catch (error) {
    if (error instanceof MongooseError.CastError) {
      next(new BadRequestError(MSGS.ID_INCORRECT_FORMAT));
    } else next(error);
  }
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
