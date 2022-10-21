const moviesRouter = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/moviesController');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', createMovie);
moviesRouter.delete('/:id', deleteMovie);

module.exports = { moviesRouter };
