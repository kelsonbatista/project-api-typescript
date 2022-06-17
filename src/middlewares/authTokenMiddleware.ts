import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userService';

const secret: string | undefined = 'chavesecreta';

const userService = new UserService();

declare module 'jsonwebtoken' {
  export interface UserIDJwtPayload extends jwt.JwtPayload {
      id: number,
  }
}


// verifica se o token existe no header
// verifica se o token é valido
// verifica se o usuario do token informado existe no banco de dados
// se o usuario nao existe, retorna erro, caso contrario segue o middleware
const authToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) return next({ status: StatusCodes.UNAUTHORIZED, message: 'Token not found' });
    const decode = <jwt.UserIDJwtPayload>jwt.verify(token, secret);
    // console.log(decode, 'decodeeee');
    const user = await userService.getUserById(decode.data[0].id);
    req.user = user;
    if (!user) return next({ status: StatusCodes.NOT_FOUND, message: 'User not found' });
    next();
  } catch (err) {
    console.log(`Error: ${err}`);
    next({ status: StatusCodes.UNAUTHORIZED, message: 'Invalid token' });
  }
};

export default authToken;
