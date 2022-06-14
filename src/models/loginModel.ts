import { Pool } from 'mysql2/promise';
import { IUser } from '../interfaces';
import connection from './connection';
import { userQueries } from '../queries';

class LoginModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public doUserLogin = async (username: string, password: string): Promise<IUser[]> => {
    const [user] = await this.connection
      .execute(userQueries.getUser, [username, password]);
    return user as IUser[];
  };
}

export default LoginModel;
