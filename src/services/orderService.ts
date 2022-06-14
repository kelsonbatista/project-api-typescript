import OrderModel from '../models/orderModel';
import { IOrder } from '../interfaces';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public getAllOrders = async (): Promise<IOrder[]> => {
    const orders = await this.model.getAllOrders();
    const newOrder = orders.map(({ id, userId, productsIds }) => (
      {
        id,
        userId,
        productsIds: [productsIds],
      }
    ));
    return newOrder;
  };
}

export default OrderService;
