import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReducerState } from "../types/reducer";

const initialState: ReducerState = {
  breed: "all",
  subBreed: "all",
  number: "1",
  allImages: 0,
  imageResults: 0,
  error: false,
};

const dogFinderSlice = createSlice({
  name: "dogFinder",
  initialState,
  reducers: {
    BREED(state, action: PayloadAction<string>) {
      state.breed = action.payload;
    },
    SUB_BREED(state, action: PayloadAction<string>) {
      state.subBreed = action.payload;
    },
    NUMBER(state, action: PayloadAction<string>) {
      state.number = action.payload;
    },
    ALL_IMAGES(state, action: PayloadAction<number>) {
      state.allImages = action.payload;
    },
    IMAGE_RESULTS(state, action: PayloadAction<number>) {
      state.imageResults = action.payload;
    },
    ERROR(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
    RESET(state) {
      state.breed = "all";
      state.subBreed = "all";
      state.number = "1";
      state.imageResults = 0;
      state.error = false;
    },
  },
});

export const {
  BREED,
  SUB_BREED,
  NUMBER,
  ALL_IMAGES,
  IMAGE_RESULTS,
  ERROR,
  RESET,
} = dogFinderSlice.actions;
export const dogFinderReducer = dogFinderSlice.reducer;
