import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecastDay.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleForecastResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col text-center">
            <WeatherForecastDay data={forecastData} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "93tdd4d3b4c2db3bcc87b00foc83ce4a";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(forecastUrl).then(handleForecastResponse);

    return null;
  }
}
