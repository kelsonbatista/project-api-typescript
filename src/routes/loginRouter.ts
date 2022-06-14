import express from 'express';
import LoginController from '../controllers/loginController';
import validateLogin from '../middlewares/validateLoginMiddleware';

const loginRouter = express.Router();

const loginController = new LoginController();

loginRouter.post('/', validateLogin, loginController.doUserLogin);

export default loginRouter;
