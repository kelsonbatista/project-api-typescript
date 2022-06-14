import { Router } from 'express';
import productRouter from './productRouter';
import userRouter from './userRouter';
import orderRouter from './orderRouter';

const router = Router();

router.use('/products', productRouter);

router.use('/users', userRouter);

router.use('/orders', orderRouter);

export default router;
