import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/configureStore";
import { getNextDays, getToday, selectNode } from "./reducers/weather";
import Card from "./components/UI/Card";
import NavBar from "./components/shared/NavBar/NavBar";
import Footer from "./components/shared/Footer/Footer";
import WeatherDetail from "./components/weather/WeatherDetail";
import WeatherNextDays from "./components/weather/WeatherNextDays";

function App() {
  const dispatch = useAppDispatch();
  const weather = useAppSelector(selectNode);

  useEffect(() => {
    dispatch(getToday());
    dispatch(getNextDays());
  }, [dispatch]);

  if (weather.loading) return <p>Loading...</p>;

  return (
    <React.Fragment>
      <NavBar />
      <main>
        <WeatherDetail title="Today" weather={weather.today} />
        <WeatherNextDays weathers={weather.nextDays} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
