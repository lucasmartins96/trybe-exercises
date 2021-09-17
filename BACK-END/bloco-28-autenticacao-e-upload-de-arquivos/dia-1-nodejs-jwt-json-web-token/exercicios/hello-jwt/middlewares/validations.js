const Joi = require('joi');
const { ADMIN } = process.env;

module.exports = (req, _res, next) => {
  const values = Object.values(req.body);

  if (values.every((value) => value.includes(ADMIN))) {
    return next();
  }

  const { error } = Joi.object({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().trim().min(5).required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};
