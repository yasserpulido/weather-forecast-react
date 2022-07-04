import React, { useCallback, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import WeatherDetail from "../components/weather/WeatherDetail";
import WeatherNextDays from "../components/weather/WeatherNextDays";
import { cities } from "../mocks/cities";
import { getNextDays, getToday, selectNode } from "../reducers/weather";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

import "./Weather.css";

const Weather = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const weather = useAppSelector(selectNode);
  const navigate = useNavigate();

  const cityCallback = useCallback((lat: string, lon: string) => {
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
