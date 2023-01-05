import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../reducer/postsReducer/postsSlice';
import { storiesReducer } from '../reducer/storiesReducer/storiesSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    stories: storiesReducer,
    posts: postsReducer,
  },
});
