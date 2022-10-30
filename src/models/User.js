const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const { UnauthorizedError } = require('../utils/Errors');

const USER_CONSTANTS = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 30,
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: '{VALUE} is not a valid email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: USER_CONSTANTS.NAME_MIN_LENGTH,
    maxlength: USER_CONSTANTS.NAME_MAX_LENGTH,
  },
}, {
  statics: {
    async findByCredentials(email, password) {
      const user = await this.findOne({ email }).select('+password');
      if (!user) throw new UnauthorizedError('Either user email, or password is invalid');
      const match = await bcrypt.compare(password, user.password);
      if (!match) throw new UnauthorizedError('Either user email, or password is invalid');
      return user;
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User, USER_CONSTANTS };
