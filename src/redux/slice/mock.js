import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMock = createAsyncThunk("fetchMock", async () => {
  const response = await axios.get(
    "https://65dc29fa3ea883a152929830.mockapi.io/mock"
  );
  return response.data;
});

const mockSlice = createSlice({
  name: "mock",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchMock.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchMock.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log(action.payload);
    })
    .addCase(fetchMock.rejected, (state, action) => {
      console.log(action.payload);
      state.isError = true;
    });
  },
});
export default mockSlice.reducer;
