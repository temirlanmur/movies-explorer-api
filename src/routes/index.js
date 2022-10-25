const { auth } = require('../middleware/auth');
const { moviesRouter } = require('./moviesRouter');
const { usersRouter } = require('./usersRouter');
const { register, login } = require('../controllers/usersController');

/**
 * Adds main routes to the app
 * @param {import('express').Application} app
 */
const useMainRouter = (app) => {
  app.post('/signup', register);
  app.post('/signin', login);
  app.use(auth);
  app.use('/users', usersRouter);
  app.use('/movies', moviesRouter);
};

module.exports = { useMainRouter };
