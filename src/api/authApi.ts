import axios from 'axios';
import { AuthResponse } from '../services/models/response/authResponse';

export const backURL = 'http://localhost:5000/api';

export const authApi = axios.create({
  withCredentials: true,
  baseURL: backURL,
});

authApi.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

authApi.interceptors.response.use(
  (config: any) => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`${backURL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return authApi.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    throw error;
  }
);
