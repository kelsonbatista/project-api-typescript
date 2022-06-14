import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getToken } from '../utils/handleToken';
import LoginService from '../services/loginService';

class LoginController {
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public doUserLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const user = await this.service.doUserLogin(username, password);
      if (user.length <= 0) {
        return res.status(StatusCodes.UNAUTHORIZED)
          .json({ message: 'Username or password invalid' });
      }
      // console.log(user, '<<<<<<<<< user');
      // const { password: userPass, ...userInfo } = user;
      const token = await getToken(user);
      return res.status(StatusCodes.OK).json(token);
    } catch (err) {
      console.log(`Error: ${err}`);
      next(err);
    }
  };
}

export default LoginController;
