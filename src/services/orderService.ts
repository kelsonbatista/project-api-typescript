import OrderModel from '../models/orderModel';
import ProductModel from '../models/productModel';
import { IOrder } from '../interfaces';

class OrderService {
  public model: OrderModel;
  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel();
    this.productModel = new ProductModel();
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

  public createOrder = async (userId: number): Promise<number> => {
    const orderId = await this.model.createOrder(userId);
    return orderId;
  };

  public updateProductOrder = (orderId: number, productId: number): void => {
    this.model.updateProductOrder(orderId, productId);
  }
}

export default OrderService;
