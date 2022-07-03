import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Weather, WeatherState } from "../types/Weather";
import { RootState } from "../store/configureStore";

const initialState = () => ({
  today: {} as Weather,
  nextDays: [] as Array<Array<Weather>>,
  loading: false,
});

export const getToday = createAsyncThunk("weather/getToday", async () => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=-34.6131500&lon=-58.3772300&appid=8a533d060297c7bd8f875f76c8583cf6&units=metric"
  );
  const data = await response.json();
  return data;
});

export const getNextDays = createAsyncThunk("weather/getNextDays", async () => {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=buenos aires&appid=8a533d060297c7bd8f875f76c8583cf6&units=metric"
  );
  const data = await response.json();
  return data;
});

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
      const d = new Date();
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yyyy = d.getFullYear();
      const today = yyyy + "-" + mm + "-" + dd;

      // Obtener datos de las fechas siguientes sin contar la fecha actual.
      const nextDays = action.payload.list.filter((element: any) => {
        const elementDate = element.dt_txt.split(" ")[0];
        return elementDate !== today;
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
