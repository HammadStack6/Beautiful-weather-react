import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import WeatherCard from "./WeatherCard";
import Footer from "./Footer";
function App() {
  return (
    <>
      <WeatherCard />
      <Footer />
    </>
  );
}

export default App;
