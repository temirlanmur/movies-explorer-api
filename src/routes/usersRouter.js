const usersRouter = require('express').Router();
const { getMe, updateMe } = require('../controllers/usersController');

usersRouter.get('/me', getMe);
usersRouter.patch('/me', updateMe);

module.exports = { usersRouter };
