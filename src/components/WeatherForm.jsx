import { createSignal } from "solid-js";

const mockWeatherData = [
  {
    city: "San Francisco",
    country: "USA",
    temperatureCelcius: 18,
    temperatureFahrenheit: 64.4,
    feelsLike: 15,
    humidity: 70,
    date: "10/04/2023",
    weatherStations: 11,
  },
  {
    city: "Paris",
    country: "France",
    temperatureCelcius: 5,
    temperatureFahrenheit: 41,
    feelsLike: 3,
    humidity: 80,
    date: "10/04/2023",
    weatherStations: 10,
  },
  {
    city: "Berlin",
    country: "Germany",
    temperatureCelcius: 31,
    temperatureFahrenheit: 87.8,
    feelsLike: 33.5,
    humidity: 90,
    date: "10/04/2023",
    weatherStations: 7,
  },
  {
    city: "London",
    country: "England",
    temperatureCelcius: 0,
    temperatureFahrenheit: 32,
    feelsLike: 0,
    humidity: 100,
    date: "10/04/2023",
    weatherStations: 25,
  },
  {
    city: "Munich",
    country: "Germany",
    temperatureCelcius: 5,
    temperatureFahrenheit: 41,
    feelsLike: 3,
    humidity: 80,
    date: "10/04/2023",
    weatherStations: 1,
  },
];

const WeatherForm = () => {
  const [city, setCity] = createSignal("");
  const [weatherData, setWeatherData] = createSignal(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const cityWeather = mockWeatherData.find(
      (weather) => weather.city.toLowerCase() === city().toLowerCase()
    );

    if (cityWeather) {
      setWeatherData(cityWeather);
    } else {
      setWeatherData({
        error: `Could not find weather for ${city()}`,
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="my-5 flex items-center space-x-3"
      >
        <input
          type="text"
          placeholder="Enter a city"
          value={city()}
          onInput={(event) => setCity(event.target.value)}
          className="p-2 rounded border-2 border-blue-400 focus:border-blue-600 outline-none"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 font-bold text-white rounded hover:bg-blue-600 transition-colors"
        >
          Get Weather
        </button>
      </form>

      {weatherData() && !weatherData().error && (
        <div className="flex flex-row p-10 space-x-12 items-center">
          <h2 className="text-xl font-semibold">
            📍 {weatherData().city}, {weatherData().country}
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold">
              Temperature is: {weatherData().temperatureCelcius}°C
              <br />
              Or: {weatherData().temperatureFahrenheit}°F
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold">
              Feels like: {weatherData().feelsLike}°C
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p>Humidity:</p>
            <p className="text-xl font-semibold">{weatherData().humidity}%</p>
          </div>
          <div className="flex flex-col items-center">
            <p>Data recorded on:</p>
            <p className="text-xl font-semibold">{weatherData().date}</p>
          </div>
          <div className="flex flex-col items-center">
            <p>Number of Weather Stations:</p>
            <p className="text-xl font-semibold">
              {weatherData().weatherStations}
            </p>
          </div>
        </div>
      )}
      {weatherData() && weatherData().error && (
        <div>
          <p className="text-red-500">{weatherData().error}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherForm;
