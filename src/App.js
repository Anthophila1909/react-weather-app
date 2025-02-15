import React from "react";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";
import "./App.css";
import "./WeatherApp.css";

export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <WeatherApp defaultCity="Ulm" />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
