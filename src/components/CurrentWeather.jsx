import React from "react";
import cloudyImage from '../assets/cloudy.png'; 
import SearchSection from '../components/SearchSection';

const CurrentWeather = ({currentWeather}) => {
  // 2. Critical: Return a loading message if data hasn't arrived yet
  if (!currentWeather) {
    return <p className="loading-text">Loading weather data...</p>;
  }
  //extract specific details from api data structure 
  const tem = currentWeather.current.temp_c;
  const condition = currentWeather.current.condition.text;
    return (
      <div className="current-weather"> 
        <img src={cloudyImage} alt={condition} className="weatherIcon" />
        <h2 className='temperature'>{tem} <span>°C</span></h2>
        <p className="description">{condition}</p>
      </div>
        
    );
}

export default CurrentWeather;