import NavBar from "./components/shared/NavBar/NavBar";
import Footer from "./components/shared/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jumbotron from "./components/UI/jumbotron/Jumbotron";
import Weather from "./pages/Weather";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Jumbotron />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/weather/lat=:lat&lon=:lon" element={<Weather />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
