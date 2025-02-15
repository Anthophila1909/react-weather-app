import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="weather-app">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city ...."
              autoFocus="on"
              className="search-input"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="search-submit" />
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-4">
          <div className="weather-info">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather-icon"
            />
            <h1>-1 </h1>
            <span>°C | °F</span>
          </div>
        </div>
        <div className="col-4">
          <ul className="weather-details">
            <li>Precipitation: 0%</li>
            <li>Humidity: 66%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="weather-location">
            <li>
              <h2>Weather in Ulm</h2>
            </li>
            <li>
              <h3>Samstag, 09:00</h3>
            </li>
            <li>
              <h3>Überwiegend bewölkt</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
