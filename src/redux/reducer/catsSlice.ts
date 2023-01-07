import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { link, X_API_KEY } from '../../api/api';
import { AddCatsType, InitialStateType } from './catsSlice.types';

export const fetchCats: any = createAsyncThunk('cats/fetchCats', async () => {
  try {
    const response = await axios.get(link, {
      headers: {
        'X-Api-Key': `${X_API_KEY}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const initialState: InitialStateType = {
  initArr: [],
  isLoading: true,
  error: null,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setCats: (state, { payload }: PayloadAction<AddCatsType>) => {
      state.initArr = payload.catsArr;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCats.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.initArr = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const { setCats } = catsSlice.actions;
export const catsReducer = catsSlice.reducer;
