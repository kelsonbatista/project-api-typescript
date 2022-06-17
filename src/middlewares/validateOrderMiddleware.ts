import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { orderSchema } from '../schemas';

const validateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const productsIdsObj = req.body;
  const { productsIds } = productsIdsObj;
  const { error } = orderSchema.validate(productsIdsObj);
  if (error) {
    const details = error.details[0];
    // console.log(details, 'detailsssssssssssssss');
    if (details.type === 'any.required') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: details.message });
    }
    return next({ status: StatusCodes.UNPROCESSABLE_ENTITY, message: details.message });
  }
  if (productsIds.length === 0) {
    return next({ status: StatusCodes.UNPROCESSABLE_ENTITY,
      message: '"productsIds" must include only numbers' });
  }
  next();
};

export default validateProduct;
