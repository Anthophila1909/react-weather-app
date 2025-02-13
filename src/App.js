import React from "react";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp />
        <Footer />
      </div>
    </div>
  );
}
