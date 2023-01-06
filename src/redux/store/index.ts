import { configureStore } from '@reduxjs/toolkit';
import { catsReducer } from '../reducer/catsSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
});
