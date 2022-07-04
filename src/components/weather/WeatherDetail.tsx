import React from "react";
import { Weather } from "../../types";
import Card from "../UI/Card/Card";
import { format } from "date-fns";

type Props = {
  title: string;
  weather: Weather;
};

const WeatherDetail: React.FC<Props> = (props: Props) => {
  const temp = Math.floor(props.weather.main?.temp);
  const tempMax = Math.floor(props.weather.main?.temp_max);
  const tempMin = Math.floor(props.weather.main?.temp_min);

  const formatHandler = (title: string, isDate: boolean) => {
    if (isDate) {
      return format(new Date(title), "PP");
    }

    return format(new Date(title), "p");
  };

  return (
    <Card className={props.title === "Today" ? "today-weather" : ""}>
      {props.title === "Today" ? (
        <h1 data-testid="title">{props.title}</h1>
      ) : (
        <span className="date-time">
          <h1 data-testid="date-title">{formatHandler(props.title, true)}</h1>
          <h2 data-testid="time-title">{formatHandler(props.title, false)}</h2>
        </span>
      )}
      <span className="temp">{temp}&deg;</span>
      <span className="high-low">
        {tempMin}&deg; / {tempMax}&deg;
      </span>
    </Card>
  );
};

export default WeatherDetail;
