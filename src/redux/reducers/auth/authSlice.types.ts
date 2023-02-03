import { User } from '../../../services/models/user.types';

export interface initialStateType {
  user: User;
  isAuth: boolean;
}

export interface DefaultType {
  email: string;
  password: string;
}

export type DefaultDispatch = (arg0: {
  payload: boolean | User;
  type: 'auth/setAuth' | 'auth/setUser';
}) => void;
