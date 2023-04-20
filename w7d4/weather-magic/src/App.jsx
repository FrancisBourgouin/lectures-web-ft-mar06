import { useEffect, useState } from "react";
import axios from "axios";

import CityForm from "./components/CityForm";
import CityList from "./components/CityList";
import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [count, setCount] = useState(0);

  const fetchWeather = (city) => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setWeatherData(data))
      .then(() => {
        if (!cities.includes(city)) {
          setCities([...cities, city]);
        }
      })
      .catch((err) => {
        console.log(err);
        setWeatherData(null);
      });
  };

  useEffect(() => {
    fetchWeather("Montréal");
  }, []);

  console.log(count);
  // setCount(count + 1); SIDE EFFECT

  useEffect(() => {
    console.log("Added event listener");
    const report = (event) => {
      console.log("list of cities is:", JSON.stringify(cities));
      console.log(`user clicked at position ${event.clientX},${event.clientY}`);
    };

    document.addEventListener("click", report);

    return () => {
      document.removeEventListener("click", report); // Cleanup part
      console.log("event listener removed");
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <CityForm fetchWeather={fetchWeather} />
        {cities.length !== 0 && <CityList cities={cities} fetchWeather={fetchWeather} />}
        {weatherData && <CurrentWeather weatherData={weatherData} />}
      </main>
    </div>
  );
}

export default App;
