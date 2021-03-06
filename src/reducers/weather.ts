import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Weather, WeatherState } from "../types/Weather";
import { RootState } from "../store/configureStore";
import { format } from "date-fns";

const initialState = () => ({
  today: {} as Weather,
  nextDays: [] as Array<Array<Weather>>,
  loading: false,
});

export const getToday = createAsyncThunk(
  "weather/getToday",
  async (params: any) => {
    const response = await fetch(
      `${process.env.REACT_APP_OPEN_WEATHER_MAP_URL}/weather?lat=${params.lat}&lon=${params.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  }
);

export const getNextDays = createAsyncThunk(
  "weather/getNextDays",
  async (params: any) => {
    const response = await fetch(
      `${process.env.REACT_APP_OPEN_WEATHER_MAP_URL}/forecast?lat=${params.lat}&lon=${params.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  }
);

const nodeSlice = createSlice({
  name: "weather",
  initialState: initialState() as WeatherState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToday.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getToday.fulfilled, (state, action) => {
      state.today = action.payload;
      state.loading = false;
    });
    builder.addCase(getToday.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getNextDays.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNextDays.fulfilled, (state, action) => {
      // Obtener fecha de hoy.
      const date = format(new Date(), "yyyy-MM-dd");

      // Obtener datos de las fechas siguientes sin contar la fecha actual.
      const nextDays = action.payload.list.filter((element: any) => {
        const elementDate = element.dt_txt.split(" ")[0];
        return elementDate !== date;
      });

      // Agrupar por fechas.
      const objList = nextDays.reduce((prev: any, curr: any) => {
        const date = curr.dt_txt.split(" ")[0];
        if (!prev[date]) {
          prev[date] = [];
        }
        prev[date].push(curr);
        return prev;
      }, {});

      // Convertir objecto a array.
      const arr = Object.keys(objList).map((key) => {
        return objList[key];
      });

      state.nextDays = arr;
      state.loading = false;
    });
    builder.addCase(getNextDays.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectNode = (state: RootState) => state.weather;
export default nodeSlice.reducer;
