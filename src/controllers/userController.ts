import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userService';

class UserController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.service.getAllUsers();
      res.status(StatusCodes.OK).json(users);
    } catch (err) {
      next(err);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.service.getUserById(id);
      res.status(StatusCodes.OK).json(user);
    } catch (err) {
      next(err);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body;
      const result = await this.service.createUser(user);
      res.status(StatusCodes.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = req.body;
      const result = await this.service.updateUser(id, user);
      res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.service.deleteUser(id);
      res.status(StatusCodes.OK).json(user);
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
