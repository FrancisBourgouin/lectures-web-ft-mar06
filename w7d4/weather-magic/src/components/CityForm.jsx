import { useState } from "react";

export default function CityForm(props) {
  const [cityName, setCityName] = useState("");
  const { fetchWeather } = props;

  const handleChange = (event) => {
    // if (event.target.value.length < 10) {
    setCityName(event.target.value);
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(cityName);
    setCityName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={cityName} />
      <button>Fetch Weather</button>
    </form>
  );
}
