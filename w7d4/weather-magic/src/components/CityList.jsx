export default function CityList(props) {
  const { cities, fetchWeather } = props;

  const parsedCities = cities.map((city) => (
    <li key={city}>
      <button onClick={() => fetchWeather(city)}>{city}</button>
    </li>
  ));

  return (
    <section>
      <h1>List of cities searched</h1>
      <ul>{parsedCities}</ul>
    </section>
  );
}
