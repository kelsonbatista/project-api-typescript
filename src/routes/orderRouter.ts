import express from 'express';
import OrderController from '../controllers/orderController';
import authToken from '../middlewares/authTokenMiddleware';
import validateOrder from '../middlewares/validateOrderMiddleware';

const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAllOrders);

orderRouter.post('/', authToken, validateOrder, orderController.createOrder);

export default orderRouter;
