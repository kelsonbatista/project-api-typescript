import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';
import connection from './connection';
import queries from '../queries';

class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const [products] = await this.connection.execute(queries.getAllProducts);
    return products as IProduct[];
  }

  public async getProductById(id: number): Promise<IProduct[]> {
    const [product] = await this.connection.execute(queries.getProductById, [id]);
    return product as IProduct[];
  }

  // duas formas de escrever a funcao (create / update)
  public async createProduct(product: IProduct): Promise<IProduct> {
    const [result] = await this.connection
      .execute<ResultSetHeader>(queries.createProduct, product);
    return {
      id: result.insertId,
      ...product,
    };
  }

  // duas formas de escrever a funcao (create / update)
  public async updateProduct(id: number, product: IProduct): Promise<IProduct> {
    const { name, amount, orderId } = product;
    await this.connection.execute(queries.updateProduct, [name, amount, orderId, id]);
    return {
      id,
      name,
      amount,
      orderId,
    };
  }

  public async deleteProduct(id: number): Promise<void> {
    await this.connection.execute(queries.removeProduct, [id]);
  }
}

export default ProductModel;
