const { celebrate, Joi, Segments } = require('celebrate');

/**
 * Validator function created using celebrate
 */
const registerValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  }),
});

/**
 * Validator function created using celebrate
 */
const loginValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

/**
 * Validator function created using celebrate
 */
const updateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
  }),
});

module.exports = { registerValidator, loginValidator, updateValidator };
