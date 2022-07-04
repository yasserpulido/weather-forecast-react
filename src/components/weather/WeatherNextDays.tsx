import React from "react";
import { Weather } from "../../types";
import WeatherDetail from "./WeatherDetail";

type Props = {
  weathers: Array<Array<Weather>>;
};

const WeatherNextDays: React.FC<Props> = (props: Props) => {
  return (
    <div className="container">
      {props.weathers.map((weathers: Array<Weather>) => (
        <div
          className="row justify-content-center border m-3 shadow-sm"
          key={weathers[0].dt_txt}
        >
          {weathers.map((weather: Weather) => (
            <div
              className="col-xl-3 col-lg-4 col-md-5 col-sm-6"
              key={weather.dt_txt}
            >
              {
                <WeatherDetail
                  key={weather.dt_txt}
                  title={weather.dt_txt}
                  weather={weather}
                />
              }
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WeatherNextDays;
