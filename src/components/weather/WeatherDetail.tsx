import React from "react";
import { Weather } from "../../types";
import Card from "../UI/Card/Card";
import { format } from "date-fns";

type Props = {
  title: string;
  weather: Weather;
};

const WeatherDetail: React.FC<Props> = (props: Props) => {
  const formatHandler = (title: string, isDate: boolean) => {
    if (isDate) {
      return format(new Date(title), "PP");
    }

    return format(new Date(title), "p");
  };

  return (
    <Card className={props.title === "Today" ? "today-weather" : ""}>
      {props.title === "Today" ? (
        <h1>{props.title}</h1>
      ) : (
        <span className="date-time">
          <h1>{formatHandler(props.title, true)}</h1>
          <h2>{formatHandler(props.title, false)}</h2>
        </span>
      )}
      <span className="temp">{props.weather.main?.temp.toFixed(0)}&deg;</span>
      <span className="high-low">
        {props.weather.main?.temp_min.toFixed(0)}&deg;/{" "}
        {props.weather.main?.temp_max.toFixed(0)}&deg;
      </span>
    </Card>
  );
};

export default WeatherDetail;
