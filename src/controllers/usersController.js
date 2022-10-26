const { Error: MongooseError } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
const { BadRequestError, ConflictError } = require('../utils/Errors');
const { UserAPIModel, TokenAPIModel } = require('../utils/APIModels');

const saltRounds = 10;
const { JWT_SECRET } = require('../environment');

/**
 * Registers a new user
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const register = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ email, password: hash, name });
    res.status(201).send(new UserAPIModel(user));
  } catch (error) {
    if (error instanceof MongooseError.ValidationError) next(new BadRequestError());
    else if (error.code === 11000) next(new ConflictError());
    else next(error);
  }
};

/**
 * Authorizes the user
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.send(new TokenAPIModel(token));
  } catch (error) {
    next(error);
  }
};

/**
 * Gets user profile data
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const getMe = async (req, res, next) => {
  const userId = req.user._id;
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
  const userId = req.user._id;
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
  register,
  login,
  getMe,
  updateMe,
};
