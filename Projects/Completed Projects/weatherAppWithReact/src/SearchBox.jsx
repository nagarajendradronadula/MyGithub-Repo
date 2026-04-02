import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState("");

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7117306d740a62b63ea11d1807391cb8";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await response.json();
      // console.log(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        weather: jsonResponse.weather[0].description,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {event.preventDefault();
    // console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  } catch (error) {
    setError(true);
  }};

  return (
    <div className="SearchBox">
      <p>Search for the weather</p>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Search a City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" type="submit" size="large">
          Search
        </Button>
      {error && <p style={{color: "red"}}>City not Found</p>}
      </form>
    </div>
  );
}
