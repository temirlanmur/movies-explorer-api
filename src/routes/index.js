const { moviesRouter } = require('./moviesRouter');

/**
 * Adds main routes to the app
 * @param {import('express').Application} app
 */
const useMainRouter = (app) => {
  app.use('/movies', moviesRouter);
};

module.exports = { useMainRouter };
