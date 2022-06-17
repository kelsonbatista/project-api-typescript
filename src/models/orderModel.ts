import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IOrder } from '../interfaces';
import { orderQueries } from '../queries';

class OrderModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public getAllOrders = async (): Promise<IOrder[]> => {
    const [orders] = await this.connection.execute(orderQueries.getAllOrders);
    return orders as IOrder[];
  };

  public createOrder = async (userId: number): Promise<number> => {
    const [orders] = await this.connection
      .execute<ResultSetHeader>(orderQueries.createOrder, [userId]);
    const { insertId } = orders;
    return insertId;
  };

  public updateProductOrder = (orderId: number, productId: number): void => {
    this.connection.execute<ResultSetHeader>(orderQueries.updateProductOrder, [orderId, productId]);
  };
}

export default OrderModel;
