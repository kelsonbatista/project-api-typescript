import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
import connection from './connection';
import { userQueries } from '../queries';

class UserModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public getAllUsers = async (): Promise<IUser[]> => {
    const [users] = await this.connection.execute(userQueries.getAllUsers);
    return users as IUser[];
  };

  public getUserById = async (id: string): Promise<IUser[]> => {
    const [user] = await this.connection.execute(userQueries.getUserById, [id]);
    return user as IUser[];
  };

  // duas formas de escrever a funcao (create / update)
  public createUser = async (product: IUser): Promise<IUser> => {
    const { username, classe, level, password } = product;
    const [result] = await this.connection
      .execute<ResultSetHeader>(userQueries.createUser, [username, classe, level, password]);
    return {
      id: result.insertId,
      ...product,
    };
  };

  // duas formas de escrever a funcao (create / update)
  public updateUser = async (id: string, product: IUser): Promise<IUser> => {
    const { username, classe, level, password } = product;
    await this.connection.execute(userQueries.updateUser, [username, classe, level, password, id]);
    return {
      username,
      classe,
      level,
      password,
    };
  };

  public deleteUser = async (id: string): Promise<void> => {
    await this.connection.execute(userQueries.deleteUser, [id]);
  };
}

export default UserModel;
