const moviesRouter = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/moviesController');
const { createValidator, deleteValidator } = require('../utils/validation/moviesValidation');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', createValidator, createMovie);
moviesRouter.delete('/:movieId', deleteValidator, deleteMovie);

module.exports = { moviesRouter };
