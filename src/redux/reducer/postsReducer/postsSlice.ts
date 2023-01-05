import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { catPostsApi, count } from '../../../api/api';
import { AddPostsType, Cat, InitialStateType } from './postsSlice.types';

export const fetchPosts: any = createAsyncThunk('cats/fetchPosts', async () => {
  const response = await catPostsApi.get(`/api/cats?limit=${count}`);
  const responseSrc = Object.values(
    response.data.map((arr: Cat) => `https://cataas.com/cat/${arr._id}`)
  );

  return responseSrc;
});

const initialState: InitialStateType = {
  initArr: [],
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, { payload }: PayloadAction<AddPostsType>) => {
      state.initArr = payload.postsArr;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.initArr = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { addPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
