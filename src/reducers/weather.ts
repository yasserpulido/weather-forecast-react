import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Weather } from "../types/Weather";
import { RootState } from "../store/configureStore";

const initialState = () => ({
  data: {},
  loading: false,
});

export const getNode = createAsyncThunk(
  "node/getNode",
  async (page: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/4/list/8206970?page=${page}&api_key=5d34d9d23f930581162aeff03ad62f10`
    );
    const data = await response.json();
    return data;
  }
);

const nodeSlice = createSlice({
  name: "node",
  initialState: initialState() as Weather,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNode.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNode.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getNode.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectNode = (state: RootState) => state.node;
export default nodeSlice.reducer;
