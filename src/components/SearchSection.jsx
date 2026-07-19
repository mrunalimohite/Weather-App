import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

const SearchSection = ({ getWeatherDetails, getWeatherByLocation }) => {
  // const API_KEY = import.meta.env.VITE_API_KEY;
  const handalCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
     if (!searchInput.value.trim()) return;
    // const API_URL = ` http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}`;
    // getWeatherDetails(API_URL); //fetches weather details for the entered city
    // Send just the text value up to the parent App.jsx component
    getWeatherDetails(searchInput.value.trim());
  };
  // 2. Add the click handler function for the location button
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Send coordinates to our App component function
          getWeatherByLocation(latitude, longitude);
        },
        (error) => {
          alert("Unable to retrieve your location. Please check your browser permissions.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };
  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handalCitySearch}>
        <span className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" /></span>
        <input type="search" placeholder="Enter City name" className="search-input" required/>
      </form>
      <button className="locationBtn" onClick={handleLocationClick}>
        <span className="location-icon"><FontAwesomeIcon icon={faLocationCrosshairs} className="search-icon" /></span>
      </button>
    </div>
  )
}

export default SearchSection;