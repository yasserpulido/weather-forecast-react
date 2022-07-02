import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/configureStore";
import { getNode, selectNode } from "./reducers/weather";
import Card from "./components/UI/Card";
import NavBar from "./components/shared/NavBar/NavBar";
import Footer from "./components/shared/Footer/Footer";

function App() {
  const dispatch = useAppDispatch();
  const weather = useAppSelector(selectNode);

  useEffect(() => {
    console.log("useEffect");
    dispatch(getNode());
  }, [dispatch]);

  if (weather.loading) return <p>Loading...</p>;

  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Card />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
