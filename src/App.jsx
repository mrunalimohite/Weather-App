import SearchSection from './components/SearchSection';
import CurrentWeather from './components/CurrentWeather';
import HourlyWeather from './components/HourlyWeather';
import { useState, useEffect } from 'react';
const App = () => {
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  //fetching weather details based on API URL
  const getWeatherDetails = async (cityOrQuery) => {
     try { 
      const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityOrQuery}`; 
      
      const response = await fetch(API_URL); 
      const data = await response.json(); 
      setCurrentWeather(data); 
      console.log("Weather data updated:", data); 
    } catch (error){ 
      console.error("API error details:", error); 
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