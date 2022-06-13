import UserModel from '../models/userModel';
import { IUser } from '../interfaces';
import { getToken } from '../utils/handleToken';

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

  public getUserByUsername = async (username: string): Promise<IUser[]> => {
    const result = await this.model.getUserByUsername(username);
    return result;
  };

  public createUser = async (user: IUser): Promise<object> => {
    const result = await this.model.createUser(user);
    const { password, ...userData } = result;
    const token = getToken(userData);
    return token;
  };

  public updateUser = async (id: string, user: IUser): Promise<IUser> => {
    const result = await this.model.updateUser(id, user);
    return result;
  };

  public deleteUser = async (id: string): Promise<void> => {
    await this.model.deleteUser(id);
  };
}

export default UserService;
