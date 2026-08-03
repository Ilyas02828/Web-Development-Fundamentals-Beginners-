import { useState } from "react";
import getWeather from "./services/weather-api";

export default function WeatherApp() {
  const [userInput, setUserInput] = useState("");
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  const [humidity, setHumidity] = useState("");

  async function loadWeatherData(userInput) {
    try {
      const data = await getWeather(userInput);

      setLocation(userInput);
      setTemperature(data.temp_C);
      setCondition(data.weatherDesc[0].value);
      setHumidity(data.humidity);

      setUserInput("");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <title>City Weather App Using ReactJS</title>

      <div className="container">
        <div className="card">
          <h2>City Weather App</h2>
          <input
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                loadWeatherData(userInput);
              }
            }}
            type="text"
            className="city"
            placeholder="Enter city name"
          />

          <h3 className="location">City: {location}</h3>
          <p className="temperature">Temperature C: {temperature}</p>
          <p className="condition">Weather condition: {condition}</p>
          <p className="humidity">Humidity: {humidity}</p>

          <button
            onClick={() => {
              loadWeatherData(userInput);
            }}
            className="btn"
          >
            Get Weather
          </button>
        </div>
      </div>
    </>
  );
}
