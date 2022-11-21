const { auth } = require('../middleware/auth');
const { moviesRouter } = require('./moviesRouter');
const { usersRouter } = require('./usersRouter');
const { register, login } = require('../controllers/usersController');
const { notFoundHandler } = require('../middleware/notFoundHandler');
const { registerValidator, loginValidator } = require('../utils/validation/usersValidation');

/**
 * Adds main routes to the app
 * @param {import('express').Application} app
 */
const useMainRouter = (app) => {
  app.post('/signup', registerValidator, register);
  app.post('/signin', loginValidator, login);
  app.use(auth);
  app.use('/users', usersRouter);
  app.use('/movies', moviesRouter);
  // routes that aren't registered will trigger 404 response:
  app.use(notFoundHandler);
};

module.exports = { useMainRouter };
