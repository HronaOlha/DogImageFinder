import { configureStore } from "@reduxjs/toolkit";
import { dogFinderReducer } from "./dogFinder";

export const store = configureStore({
  reducer: {
    dogFinder: dogFinderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
