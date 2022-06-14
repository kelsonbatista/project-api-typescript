import { Pool } from 'mysql2/promise';
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
}

export default OrderModel;
