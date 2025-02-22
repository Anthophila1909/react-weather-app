import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data[0].temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data[0].temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data[0].time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-icon">
        <img
          src={props.data[0].condition.icon_url}
          alt={props.data[0].condition.description}
        />
      </div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-temerature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>{" "}
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
