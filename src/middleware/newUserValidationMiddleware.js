const Joi = require('joi');

const newUserSchema = Joi.object({
  id: Joi.string().required(),
  firstName: Joi.string().alphanum().min(3).max(15).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'es'] },
    }),
});

async function newUserValidationMiddleware(req, res, next) {
  const { id, firstName, lastName, email } = req.body;

  try {
    const { error } = newUserSchema.validate({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    if (error) {
      res.status(401).send({ error: error.message });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  newUserValidationMiddleware,
};
