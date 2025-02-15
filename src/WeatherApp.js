import React from "react";

export default function WeatherApp() {
  return (
    <div className="container weather-app">
      <div className="row">
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-icon"
          />
          <h1>-1°C</h1>
        </div>
        <div className="col-4">
          <p>Niederschlag: 0%</p>
          <p>Luftfeuchte: 66%</p>
          <p>Wind: 5 km/h</p>
        </div>
        <div className="col-4">
          <h2>Wetter in Ulm</h2>
          <h3>Samstag, 09:00</h3>
          <h3>Überwiegend bewölkt</h3>
        </div>
      </div>
    </div>
  );
}
