import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherCard.css";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        {
          params: {
            key: "5e4806a80d2541a0b6f115425250704",
            q: "Karachi", // Static city name
          },
        }
      );
      setWeather(data);
    } catch {
      setError("Failed to fetch weather data");
    }
  };

  if (error) return <p className="error-message">{error}</p>;
  if (!weather) return <p className="loading-message">Loading...</p>;

  return (
    <div className="home-container">
      <div className="container">
        <h2>Weather in {weather.location.name}</h2>
        <h4>
          {weather.location.region}, {weather.location.country}
        </h4>
        <img
          src={`http:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
        />
        <p>
          <strong>{weather.current.temp_c}°C</strong>
        </p>
        <p>{weather.current.condition.text}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
