import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { catStoriesApi, key, count } from '../../../api/api';
import { AddStoriesType, InitialStateType } from './storiesSlice.types';

export const fetchStories: any = createAsyncThunk(
  'cats/fetchStories',
  async () => {
    const response = await catStoriesApi.get(
      `/search?limit=${count}&api_key=${key}`
    );
    return response.data;
  }
);

const initialState: InitialStateType = {
  initArr: [],
  error: null,
};

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    addStories: (state, { payload }: PayloadAction<AddStoriesType>) => {
      state.initArr = payload.storiesArr;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.initArr = action.payload;
    });
    builder.addCase(fetchStories.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { addStories } = storiesSlice.actions;
export const storiesReducer = storiesSlice.reducer;
