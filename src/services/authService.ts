import { AxiosResponse } from 'axios';
import { authApi } from '../api/authApi';
import { AuthResponse } from './models/response/authResponse';

export default class AuthService {
  static login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return authApi.post<AuthResponse>('/login', { email, password });
  }

  static registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return authApi.post<AuthResponse>('/registration', { email, password });
  }

  static logout(): Promise<void> {
    return authApi.post('/logout');
  }
}
