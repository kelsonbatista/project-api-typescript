import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required().min(3),
  password: Joi.string().required().min(8),
});

export default loginSchema;
