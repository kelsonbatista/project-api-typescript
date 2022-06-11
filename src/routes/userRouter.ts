import express from 'express';
import UserController from '../controllers/userController';
import validateUser from '../middlewares/validateUserMiddleware';

const userRouter = express.Router();

const userController = new UserController();

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:id', userController.getUserById);

userRouter.post('/', validateUser, userController.createUser);

userRouter.put('/:id', userController.updateUser);

userRouter.delete('/:id', userController.deleteUser);

export default userRouter;
