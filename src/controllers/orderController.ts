import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/orderService';

class OrderController {
  public service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAllOrders = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await this.service.getAllOrders();
      res.status(StatusCodes.OK).json(orders);
    } catch (err) {
      next(err);
    }
  };

  public createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const [{ id }] = req.user;
      const { productsIds } = req.body;
      const orderId = await this.service.createOrder(Number(id));
      productsIds.map((productId: number) => this.service.updateProductOrder(orderId, productId));
      const order = { userId: id, productsIds };
      res.status(StatusCodes.CREATED).json(order);
    } catch (err) {
      next(err);
    }
  };
}

export default OrderController;
