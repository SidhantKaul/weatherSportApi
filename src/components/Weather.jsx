import React from "react";
import { useHistory } from "react-router-dom";
function Weather(props) {
  const history = useHistory();
  if(!props.data.location) {
    history.push("/");
    return null;
  }
  else {
    console.log(props.data);
    return (
      <div className="card">
      <div className="left">
        <h2>{props.data.location.country}</h2>
        <p>current temp: {props.data.current.temp_c}C</p>
        <p>weather condition: {props.data.current.condition.text}</p>
        <p>humidity: {props.data.current.humidity}%</p>
        <p>wind speed: {props.data.current.wind_kph}km/h</p>
      </div>
      <div className="right">
        <img className="weather-icon" src={"https:"+props.data.current.condition.icon} alt="weather_icon" />
      </div>
      </div>);
  }


}

export default Weather;
