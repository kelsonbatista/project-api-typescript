import express from 'express';
import ProductController from '../controllers/productController';
import validateProduct from '../middlewares/validateProductMiddleware';

const productRouter = express.Router();

const productController = new ProductController();

productRouter.get('/', productController.getAllProducts);

productRouter.get('/:id', productController.getProductById);

productRouter.post('/', validateProduct, productController.createProduct);

productRouter.put('/:id', productController.updateProduct);

productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;
