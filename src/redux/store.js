import { configureStore } from "@reduxjs/toolkit";
import mockReducer from "./slice/mock";

export const store = configureStore({
  reducer: {
    mock: mockReducer,
  },
});
