import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { backURL } from '../../../api/authApi';
import AuthService from '../../../services/authService';
import { AuthResponse } from '../../../services/models/response/authResponse';
import { User } from '../../../services/models/user.types';
import {
  DefaultDispatch,
  DefaultType,
  initialStateType,
} from './authSlice.types';

const initialState: initialStateType = {
  user: {} as User,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
  },
});

export const login: any =
  ({ email, password }: DefaultType) =>
  async (dispatch: DefaultDispatch): Promise<void> => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (error) {
      console.log(error);
    }
  };

export const registration: any =
  ({ email, password }: DefaultType) =>
  async (dispatch: DefaultDispatch): Promise<void> => {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (error) {
      console.log(error);
    }
  };

export const logout: any =
  () =>
  async (dispatch: DefaultDispatch): Promise<void> => {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(setAuth(false));
      dispatch(setUser({} as User));
    } catch (error) {
      console.log(error);
    }
  };

export const checkAuth: any =
  () =>
  async (dispatch: DefaultDispatch): Promise<void> => {
    try {
      const response = await axios.get<AuthResponse>(`${backURL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (error) {
      console.log(error);
    }
  };

export const { setAuth, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
