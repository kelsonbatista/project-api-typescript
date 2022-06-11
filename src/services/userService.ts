import UserModel from '../models/userModel';
import { IUser } from '../interfaces';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public getAllUsers = async (): Promise<IUser[]> => {
    const result = await this.model.getAllUsers();
    return result;
  };

  public getUserById = async (id: string): Promise<IUser[]> => {
    const result = await this.model.getUserById(id);
    return result;
  };

  public createUser = async (product: IUser): Promise<IUser> => {
    const result = await this.model.createUser(product);
    return result;
  };

  public updateUser = async (id: string, product: IUser): Promise<IUser> => {
    const result = await this.model.updateUser(id, product);
    return result;
  };

  public deleteUser = async (id: string): Promise<void> => {
    await this.model.deleteUser(id);
  };
}

export default UserService;
