import React, { useCallback, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import WeatherDetail from "../components/weather/WeatherDetail";
import WeatherNextDays from "../components/weather/WeatherNextDays";
import { getNextDays, getToday, selectNode } from "../reducers/weather";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

import "./Weather.css";

const Weather = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const weather = useAppSelector(selectNode);
  const navigate = useNavigate();

  const cityCallback = useCallback((lat: string, lon: string) => {
    const cities = [
      {
        name: "Boston",
        coord: {
          lat: "42.361145",
          lon: "-71.057083",
        },
      },
      {
        name: "Buenos Aires",
        coord: {
          lat: "-34.603722",
          lon: "-58.381592",
        },
      },
      {
        name: "Caracas",
        coord: {
          lat: "10.500000",
          lon: "-66.916664",
        },
      },
      {
        name: "Caracas",
        coord: {
          lat: "8.983333",
          lon: "-79.516670",
        },
      },
      {
        name: "Panama",
        coord: {
          lat: "-30.033056",
          lon: "-51.230000",
        },
      },
    ];

    const isAllowed = cities.some(
      (city) => city.coord.lat === lat && city.coord.lon === lon
    );

    return isAllowed;
  }, []);

  useEffect(() => {
    const isAllowed = cityCallback(params.lat!, params.lon!);

    if (isAllowed) {
      dispatch(getToday(params));
      dispatch(getNextDays(params));
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  if (weather.loading)
    return (
      <div className="loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  return (
    <React.Fragment>
      <WeatherDetail title="Today" weather={weather.today} />
      <WeatherNextDays weathers={weather.nextDays} />
    </React.Fragment>
  );
};

export default Weather;
