import React from "react";
import { Weather } from "../../types";
import WeatherDetail from "./WeatherDetail";

type Props = {
  weathers: Array<Array<Weather>>;
};

const WeatherNextDays: React.FC<Props> = (props: Props) => {
//   if (props.weathers) {
//     props.weathers.map((element: Array<Weather>) => {
//       console.log("element");
//       element.map((e: Weather) => console.log(e));
//       return element;
//     });
//   }

  return (
    <div>
      {props.weathers.map((weathers: Array<Weather>) =>
        weathers.map((weather: Weather) => (
          <WeatherDetail
            key={weather.id}
            title={weather.dt_txt}
            weather={weather}
          />
        ))
      )}
    </div>
  );
};

export default WeatherNextDays;
