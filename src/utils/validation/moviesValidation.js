const { celebrate, Joi, Segments } = require('celebrate');
const validator = require('validator');

/**
 * Helper method to validate urls
 */
const _urlValidator = (value, helpers) => {
  if (validator.isURL(value)) return value;
  return helpers.error('any.invalid');
};

const urlSchema = Joi
  .string()
  .custom(_urlValidator, 'url validation')
  .required()
  .messages({ 'any.invalid': 'The provided value is not a valid url' });

/**
 * Validator function created using celebrate
 */
const createValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: urlSchema,
    trailerLink: urlSchema,
    thumbnail: urlSchema,
    movieId: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

/**
 * Validator function created using celebrate
 */
const deleteValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required(),
  }),
});

module.exports = { createValidator, deleteValidator };
