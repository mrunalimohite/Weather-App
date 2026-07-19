import React from "react"
import cloudyImage from '../assets/cloudy.png'; 
const HourlyWeather = ({ hourlyForecast }) => {
    // Defensive guard: don't render anything if the array hasn't arrived yet
    if (!hourlyForecast) return null;
    //filter 24 hours to display an entery every 3 hours 
    const filterdHourse = hourlyForecast.filter((_, index) => index % 3 === 0);
    return (
        <>
        { filterdHourse.map((hourItem) => {
            //extract time string and format it tp 'HH:MM'
            const timeString = hourItem.time.split(" ")[1];
            const temp = Math.round(hourItem.temp_c);

            return (
                <li className="weatherItem" key={hourItem.time_epoch} >
                    <p className="time">{timeString}</p>
                    <img src={hourItem.condition.icon} alt={hourItem.condition.text} className="weatherIcon" />
                    <p className="temparature">{temp}°C</p>
                </li>
            )
        })}
        </>
    )
}

export default HourlyWeather;