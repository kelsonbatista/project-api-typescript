import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().required().min(2),
  amount: Joi.string().required().min(2),
});

export default productSchema;
