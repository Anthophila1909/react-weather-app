import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleForecastResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col text-center">
            <div className="forecast-icon">
              <img
                src={forecastData[0].condition.icon_url}
                alt={forecastData[0].condition.description}
              />
            </div>
            <div className="forecast-day">{forecastData[0].time}</div>
            <div className="forecast-temerature">
              <span className="forecast-temperature-max">
                {forecastData[0].temperature.maximum}°
              </span>{" "}
              <span className="forecast-temperature-min">
                {forecastData[0].temperature.minimum}°
              </span>
            </div>
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
