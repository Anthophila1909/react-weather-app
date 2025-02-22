import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./WeatherApp.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mb-3">
        <div className="col-4">
          <div className="weather-info">
            <img src={props.data.icon} alt={props.data.description} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-4">
          <ul className="weather-details">
            <li className="text-capitalize">{props.data.description}</li>
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
              <h3>
                <FormattedDate date={props.data.date} />
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <WeatherForecast coordinates={props.data.coordinates} />
    </div>
  );
}
