import express from 'express';
import ProductController from '../controllers/productController';

const productRouter = express.Router();

const productController = new ProductController();

productRouter.get('/', productController.getAllProducts);

productRouter.get('/:id', productController.getProductById);

productRouter.post('/', productController.createProduct);

productRouter.put('/:id', productController.updateProduct);

productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;
