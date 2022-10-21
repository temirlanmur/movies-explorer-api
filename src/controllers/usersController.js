const { Error: MongooseError } = require('mongoose');
const { User } = require('../models/User');
const { BadRequestError } = require('../utils/Errors');
const { UserAPIModel } = require('../utils/APIModels/UserAPIModel');

/**
 * Gets user profile data
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const getMe = async (req, res, next) => {
  const userId = '';
  try {
    const user = await User.findById(userId);
    if (!user) next(new BadRequestError());
    res.send(new UserAPIModel(user));
  } catch (error) {
    next(error);
  }
};

/**
 * Updates user profile
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const updateMe = async (req, res, next) => {
  const userId = '';
  const { email, name } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { email, name },
      { new: true, runValidators: true },
    );
    if (!user) next(new BadRequestError());
    res.send(new UserAPIModel(user));
  } catch (error) {
    if (error instanceof MongooseError.ValidationError) next(new BadRequestError());
    else next(error);
  }
};

module.exports = {
  getMe,
  updateMe,
};
