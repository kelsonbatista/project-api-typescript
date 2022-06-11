import ProductModel from '../models/productModel';
import { IProduct } from '../interfaces';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public getAllProducts = async (): Promise<IProduct[]> => {
    const products = await this.model.getAllProducts();
    return products;
  };

  public getProductById = async (id: string): Promise<IProduct[]> => {
    const product = await this.model.getProductById(id);
    return product;
  };

  public createProduct = async (product: IProduct): Promise<IProduct> => {
    const result = await this.model.createProduct(product);
    return result;
  };

  public updateProduct = async (id: string, product: IProduct): Promise<IProduct> => {
    const result = await this.model.updateProduct(id, product);
    return result;
  };

  public deleteProduct = async (id: string): Promise<void> => {
    await this.model.deleteProduct(id);
  };
}

export default ProductService;
