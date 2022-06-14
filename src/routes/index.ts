import { Router } from 'express';
import productRouter from './productRouter';
import userRouter from './userRouter';
import orderRouter from './orderRouter';
import loginRouter from './loginRouter';

const router = Router();

router.use('/products', productRouter);

router.use('/users', userRouter);

router.use('/orders', orderRouter);

router.use('/login', loginRouter);

export default router;
