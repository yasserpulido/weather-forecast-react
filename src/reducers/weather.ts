import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Weather } from "../types/Weather";
import { RootState } from "../store/configureStore";

const initialState = () => ({
  data: {},
  loading: false,
});

export const getNode = createAsyncThunk("node/getNode", async () => {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=buenos aires&units=metric&appid="
  );
  const data = await response.json();
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
      // const currentDay = new Date().getDate() + 1;
      // let arrayData = [{}];

      // action.payload.list.forEach((element: any) => {
      //   const dt_txt = element.dt_txt;
      //   const temp_max = element.main.temp_max;
      //   const temp_min = element.main.temp_min;
      //   const temp = element.main.temp;
      //   const weather = element.weather.main;

      //   const day = new Date(element.dt_txt).getDate();

      //   if (day === currentDay) {

      // arrayData.push({
      //   first: {
      //     dt_txt,
      //     temp_max,
      //     temp_min,
      //     temp,
      //     weather,
      //   },
      // });
      // }
      // });

      // console.log("arrayData: ", arrayData);

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
