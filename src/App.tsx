import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/configureStore";
import { getNode, selectNode } from "./reducers/weather";

function App() {
  const dispatch = useAppDispatch();
  const weather = useAppSelector(selectNode);

  useEffect(() => {
    console.log("useEffect");
    dispatch(getNode());
  }, [dispatch]);

  if (weather.loading) return <p>Loading...</p>;

  return <div>{weather.data.city.name}</div>;
}

export default App;
