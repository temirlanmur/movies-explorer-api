const usersRouter = require('express').Router();
const { getMe, updateMe } = require('../controllers/usersController');
const { updateValidator } = require('../utils/validation/usersValidation');

usersRouter.get('/me', getMe);
usersRouter.patch('/me', updateValidator, updateMe);

module.exports = { usersRouter };
