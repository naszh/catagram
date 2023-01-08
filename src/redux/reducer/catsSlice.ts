import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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
  curArr: [],
  loading: true,
  error: null,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setCats: (state, { payload }: PayloadAction<AddCatsType>) => {
      state.initArr = payload.catsArr;
    },
    setCurr: (state, { payload }: PayloadAction<number[]>) => {
      state.curArr = [
        ...state.curArr,
        ...state.initArr.slice(payload[0], payload[1]),
      ];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCats.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.initArr = action.payload;
      state.initArr = state.initArr.map(arr => ({
        ...arr,
        id: uuidv4(),
        isLiked: false,
      }));
      state.loading = false;
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { setCats, setCurr } = catsSlice.actions;
export const catsReducer = catsSlice.reducer;
