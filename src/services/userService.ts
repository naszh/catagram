import { AxiosResponse } from 'axios';
import { authApi } from '../api/authApi';
import { User } from './models/user.types';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<User[]>> {
    {
      return authApi.get<User[]>('/users');
    }
  }
}
