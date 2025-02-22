import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import "./WeatherApp.css";

export default function WeatherApp(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function getWeather(response) {
    setWeatherData({
      ready: true,
      city_name: response.data.city,
      temperature: response.data.temperature.current,
      feels_like: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "93tdd4d3b4c2db3bcc87b00foc83ce4a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city ...."
                autoFocus="on"
                className="search-input"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="search-submit" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <ClipLoader
          color="#a2a8d3"
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
}
