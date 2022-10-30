const moviesRouter = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/moviesController');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', createMovie);
moviesRouter.delete('/:movieId', deleteMovie);

module.exports = { moviesRouter };
