import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().required().min(3),
  classe: Joi.string().required().min(3),
  level: Joi.number().required().min(1),
  password: Joi.string().required().min(8),
});

export default userSchema;
