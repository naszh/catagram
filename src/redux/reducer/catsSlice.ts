import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { catApi, key, count } from '../../api/api';
import { AddCatsType, Cat, InitialStateType } from './catsSliceTypes';

export const fetchCats: any = createAsyncThunk('cats/fetchCats', async () => {
  const response = await catApi.get(`/search?limit=${count}&api_key=${key}`);
  console.log(response.data);
  return response.data;
});

const initialState: InitialStateType = {
  initArr: [],
  error: null,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    addCats: (state, { payload }: PayloadAction<AddCatsType>) => {
      state.initArr = payload.catsArr;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.initArr = action.payload;
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { addCats } = catsSlice.actions;
export const catsReducer = catsSlice.reducer;
