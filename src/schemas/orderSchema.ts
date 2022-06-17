import Joi from 'joi';

const orderSchema = Joi.object({
  productsIds: Joi.array().required().items(Joi.number()),
});

export default orderSchema;
