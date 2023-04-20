export default function CurrentWeather(props) {
  const { weatherData } = props;

  const temp = Math.round(weatherData.main.temp - 273.15);
  const condition = weatherData.weather[0].description;
  const city = weatherData.name;

  return (
    <section>
      <h1>Current weather for {city}</h1>
      <p>The weather is {condition}</p>
      <p>It is currently {temp} °C</p>
    </section>
  );
}
