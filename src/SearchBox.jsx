import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);
  let URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "5f63f7deb834bfc43f8c1f406e23b994";

  let weatherInfo = async () => {
    try {
      let response = await fetch(
        `${URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();
      console.log(data);
      let result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
        feelLike: data.main.feels_like,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await weatherInfo();
      updateInfo(newInfo);
      setErr(false);
    } catch {
      setErr(true);
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          size="small"
          color="warning"
          focused
        />
        <Button variant="text" type="submit" size="large">
          {<SearchIcon style={{ color: "white" }} />}
        </Button>
        {err && <h3 style={{ color: "maroon" }}>This City does exist!! </h3>}
      </form>
    </div>
  );
}
