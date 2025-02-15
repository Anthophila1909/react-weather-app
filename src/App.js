import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <WeatherApp />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
