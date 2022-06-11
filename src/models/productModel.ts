import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';
import connection from './connection';
import queries from '../queries';

class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public getAllProducts = async (): Promise<IProduct[]> => {
    const [products] = await this.connection.execute(queries.getAllProducts);
    return products as IProduct[];
  };

  public getProductById = async (id: string): Promise<IProduct[]> => {
    const [product] = await this.connection.execute(queries.getProductById, [id]);
    return product as IProduct[];
  };

  // duas formas de escrever a funcao (create / update)
  public createProduct = async (product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;
    const [result] = await this.connection
      .execute<ResultSetHeader>(queries.createProduct, [name, amount]);
    return {
      id: result.insertId,
      ...product,
    };
  };

  // duas formas de escrever a funcao (create / update)
  public updateProduct = async (id: string, product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;
    await this.connection.execute(queries.updateProduct, [name, amount, id]);
    return {
      name,
      amount,
    };
  };

  public deleteProduct = async (id: string): Promise<void> => {
    await this.connection.execute(queries.removeProduct, [id]);
  };
}

export default ProductModel;
