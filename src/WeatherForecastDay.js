import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function icon() {
    return props.data.condition.icon_url;
  }

  function iconDescription() {
    return props.data.condition.description;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-icon">
        <img src={icon()} alt={iconDescription()} />
      </div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-temerature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>{" "}
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
