import { IUser } from '../interfaces';
import LoginModel from '../models/loginModel';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  public doUserLogin = async (username: string, pass: string): Promise<IUser[]> => {
    const user = await this.model.doUserLogin(username, pass);
    return user as IUser[];
  };
}

export default LoginService;
