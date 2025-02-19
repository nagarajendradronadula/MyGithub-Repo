import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "WonderLand",
    feelsLike: 25.98,
    humidity: 83,
    temp: 25.23,
    tempMax: 25.73,
    tempMin: 25.23,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Weather App by Delta</h3>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
