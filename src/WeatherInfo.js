import React from "react";
import "./WeatherApp.css";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-4">
        <div className="weather-info">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-icon"
          />
          <h1>{Math.round(props.data.temperature)}</h1>
          <span>°C | °F</span>
        </div>
      </div>
      <div className="col-4">
        <ul className="weather-details">
          <li>Feels like: {props.data.feels_like}%</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
      <div className="col-4">
        <ul className="weather-location">
          <li>
            <h2>{props.data.city_name}</h2>
          </li>
          <li>
            <h3>Samstag, 09:00</h3>
          </li>
          <li>
            <h3>{props.data.description}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
