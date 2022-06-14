import express from 'express';
import OrderController from '../controllers/orderController';

const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAllOrders);

export default orderRouter;
