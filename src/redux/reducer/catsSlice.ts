import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { links, X_API_KEY } from '../../api/api';
import { AddCatsType, Cat, InitialStateType } from './catsSlice.types';

export const fetchCats: any = createAsyncThunk(
  'cats/fetchCats',
  async (offset: number) => {
    try {
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
  curArr: [],
  offset: 0,
  counter: 0,
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
    setCurr: (state, { payload }: PayloadAction<number>) => {
      const endOffset: number = state.offset + payload;
      state.curArr = [
        ...state.curArr,
        ...state.initArr.slice(state.offset, endOffset),
      ].filter((el, i, arr) => arr.findIndex(elem => elem.id === el.id) === i);
    },
    setOffset: (state, { payload }: PayloadAction<number>) => {
      state.offset += payload;
    },
    toggleIsLiked: (state, action: PayloadAction<string>) => {
      state.initArr = state.initArr.map((post: Cat) =>
        post.id === action.payload
          ? {
              ...post,
              isLiked: !post.isLiked,
            }
          : post
      );
    },
    launchCounter: state => {
      state.counter = state.initArr.filter(
        (post: Cat) => post.isLiked === true
      ).length;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCats.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.loading = false;
      state.initArr = action.payload;
      state.initArr = state.initArr.map(arr => ({
        ...arr,
        id: uuidv4(),
        isLiked: false,
      }));
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setCats, setCurr, setOffset, toggleIsLiked, launchCounter } =
  catsSlice.actions;
export const catsReducer = catsSlice.reducer;
