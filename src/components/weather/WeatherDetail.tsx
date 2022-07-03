import React from "react";
import { Weather } from "../../types";
import Card from "../UI/Card";

type Props = {
  title: string;
  weather: Weather;
};

const WeatherDetail: React.FC<Props> = (props: Props) => {
  return (
    <Card>
      <h1>{props.title}</h1>
      <span className="temp">
        {props.weather.main?.temp.toFixed(0)}&deg;
      </span>
      <span className="high-low">
        {props.weather.main?.temp_min.toFixed(0)}&deg;/{" "}
        {props.weather.main?.temp_max.toFixed(0)}&deg;
      </span>
    </Card>
  );
};

export default WeatherDetail;
