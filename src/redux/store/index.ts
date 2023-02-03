import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../reducers/auth/authSlice';
import { catsReducer } from '../reducers/cats/catsSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    cats: catsReducer,
    auth: authReducer,
  },
});
