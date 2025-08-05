import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
export default function WeatherApp() {
  let [weather, setWeather] = useState({
    city: "Surat",
    feelsLike: "27.17",
    humidity: "10",
    temp: "28.74",
    tempMax: "28.74",
    tempMin: "28.74",
    weather: "clear sky",
  });

  let updateInfo = (result) => {
    setWeather(result);
  };
  return (
    <div style={{ textAlign: "center" }} className="WeatherApp">
      <h1 style={{ color: "white" }}>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <hr />
      <InfoBox info={weather} />
    </div>
  );
}
