const { celebrate, Joi, Segments } = require('celebrate');
const { USER_SCHEMA_CONSTANTS: C } = require('../../models/User');

const nameSchema = Joi.string()
  .min(C.NAME_MIN_LENGTH)
  .max(C.NAME_MAX_LENGTH)
  .required();

/**
 * Validator function created using celebrate
 */
const registerValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: nameSchema,
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
    name: nameSchema,
  }),
});

module.exports = { registerValidator, loginValidator, updateValidator };
