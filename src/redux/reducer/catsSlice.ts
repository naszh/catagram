import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api, X_API_KEY } from '../../api/api';
import { AddCatsType, InitialStateType } from './catsSlice.types';

export const fetchCats: any = createAsyncThunk('cats/fetchCats', async () => {
  const response = await api.get('', {
    params: {},
    headers: {
      'X-Api-Key': `${X_API_KEY}`,
    },
  });
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
