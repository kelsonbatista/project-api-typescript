import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import productSchema from '../schemas/productSchema';

const validateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  const { error } = productSchema.validate(product);
  if (error) {
    const details = error.details[0];
    if (details.type === 'any.required') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: details.message });
    }
    return next({ status: StatusCodes.UNPROCESSABLE_ENTITY, message: details.message });
  }
  next();
};

export default validateProduct;
