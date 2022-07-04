export interface Weather {
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  id: number;
  name: string;
}

export interface WeatherState {
  today: Weather;
  nextDays: Array<Array<Weather>>;
  loading: boolean;
}
