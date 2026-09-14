import SearchSection from './components/SearchSection';
import CurrentWeather from './components/CurrentWeather';
import HourlyWeather from './components/HourlyWeather';
import { useState, useEffect } from 'react';
import './index.css'
const App = () => {
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  //fetching weather details based on API URL
  const getWeatherDetails = async (cityOrQuery) => {
     try {
      const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityOrQuery}&days=1`;

      const response = await fetch(API_URL);
      const data = await response.json();

      // WeatherAPI returns a 200 with an { error: {...} } body for bad
      // cities/keys instead of a non-ok status, so check for that explicitly.
      if (data.error) {
        setErrorMessage(data.error.message);
        setCurrentWeather(null);
        return;
      }

      setErrorMessage(null);
      setCurrentWeather(data);
      console.log("Weather data updated:", data);
    } catch (error){
      console.error("API error details:", error);
      setErrorMessage("Something went wrong fetching the weather. Please try again.");
      setCurrentWeather(null);
    }
  };
  // New function to fetch weather using latitude and longitude coordinates
  const getWeatherByLocation = (lat, lon) => {
    const coordinationQuery = `${lat},${lon}`;
    getWeatherDetails(coordinationQuery);
  };

  // Automatically fetches a default city on startup so screen isn't blank
  useEffect(() => {
    const defaultCity = "Mumbai";
    getWeatherDetails(defaultCity);
  }, []); 

  return (
  <div className="container">
    {/* Seacrh section */}
    <SearchSection 
      getWeatherDetails={getWeatherDetails} 
      getWeatherByLocation={getWeatherByLocation} 
    />
  
    {/* weather section*/}
    <div className="weather-section">
      {errorMessage && <p className="error-text">{errorMessage}</p>}
      <CurrentWeather currentWeather={currentWeather} /> 
      <div className="hourly-forecast">
        <ul className="weatherList">
          {/* The && check ensures we only try to read forecast after currentWeather is loaded */}
          {currentWeather && currentWeather.forecast && (
            <HourlyWeather hourlyForecast={currentWeather.forecast.forecastday[0].hour} />
          )}
        </ul>
      </div>
    </div>
  </div>
)};

export default App;
