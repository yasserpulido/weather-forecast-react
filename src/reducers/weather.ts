import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Weather } from "../types/Weather";
import { RootState } from "../store/configureStore";

const initialState = () => ({
  data: {},
  loading: false,
});

export const getNode = createAsyncThunk("node/getNode", async () => {
  console.log("getNode");
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=buenos aires&units=metric&appid=8a533d060297c7bd8f875f76c8583cf6"
  );
  const data = await response.json();
  console.log(data);
  return data;
});

const nodeSlice = createSlice({
  name: "weather",
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

export const selectNode = (state: RootState) => state.weather;
export default nodeSlice.reducer;
