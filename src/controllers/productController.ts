import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/productService';

class ProductController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.service.getAllProducts();
      res.status(StatusCodes.OK).json(products);
    } catch (err) {
      next(err);
    }
  };

  public getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = await this.service.getProductById(id);
      res.status(StatusCodes.OK).json(product);
    } catch (err) {
      next(err);
    }
  };

  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;
      const result = await this.service.createProduct(product);
      res.status(StatusCodes.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  };

  public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = req.body;
      const result = await this.service.updateProduct(id, product);
      res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  };

  public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const products = await this.service.deleteProduct(id);
      res.status(StatusCodes.OK).json(products);
    } catch (err) {
      next(err);
    }
  };
}

export default ProductController;
