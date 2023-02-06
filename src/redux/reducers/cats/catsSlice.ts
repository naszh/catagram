import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { links, X_API_KEY } from '../../../api/api';
import { Cat, InitialStateType } from './catsSlice.types';

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
  filteredArr: [],
  stories: [],
  storyImage: '',
  offset: 0,
  counter: 0,
  loading: true,
  error: null,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    searchByName: (state, { payload }: PayloadAction<string>) => {
      const initArr = state.initArr.filter((cat: Cat) =>
        cat.name.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        filteredArr: payload.length > 0 ? initArr : [...state.initArr],
      };
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
    getStoryImg: (state, { payload }: PayloadAction<string>) => {
      state.storyImage = payload;
    },
    toggleIsViewed: (state, action: PayloadAction<string>) => {
      state.stories = state.stories.map((post: Cat) =>
        post.id === action.payload
          ? {
              ...post,
              isViewed: true,
            }
          : post
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCats.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.initArr = action.payload;
      state.initArr = state.initArr.map(arr => ({
        ...arr,
        id: uuidv4(),
        isLiked: false,
        isViewed: false,
      }));
      state.stories = [...state.initArr]
        .sort(() => Math.random() - 0.5)
        .slice(0, 13);
      state.loading = false;
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  searchByName,
  setOffset,
  toggleIsLiked,
  launchCounter,
  getStoryImg,
  toggleIsViewed,
} = catsSlice.actions;
export const catsReducer = catsSlice.reducer;
