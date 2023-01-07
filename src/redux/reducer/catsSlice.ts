import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, links, param, X_API_KEY } from '../../api/api';
import { AddCatsType, Cat, InitialStateType } from './catsSlice.types';

export const fetchCats: any = createAsyncThunk(
  'cats/fetchCats',
  async (offset: number = 0) => {
    try {
      //82
      const requests = links.map(link =>
        axios.get(link, {
          params: {
            offset: offset,
          },
          headers: {
            'X-Api-Key': `${X_API_KEY}`,
          },
        })
      );

      const response = await Promise.all(requests).then(r =>
        r.map(resp => resp.data).flat()
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState: InitialStateType = {
  initArr: [],
  offset: [],
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
    setOff: (state, { payload }: PayloadAction<any>) => {
      state.offset = payload.offset;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCats.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.initArr = action.payload;
      state.offset = state.initArr.slice(0, 4);
      state.isLoading = false;
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const { setCats, setOff } = catsSlice.actions;
export const catsReducer = catsSlice.reducer;
