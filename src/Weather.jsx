import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'f271e57d3819404b8fb133614242305'; // Replace with your WeatherAPI key

function Weather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data.error.message : error.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {weatherData && (
        <div>
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c} °C</p>
          <p>Weather: {weatherData.current.condition.text}</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
