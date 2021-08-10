import React,{useState} from "react";
import Button from "./Buttons";
import { useHistory } from "react-router-dom";
const axios = require('axios').default;
function Home(props) {
  const history = useHistory();
  const [name,setName] = useState("");
  const [btn,setBtn] = useState(false);
  const [weatherData,setWeatherData] = useState({});
  const [sportsData,setSportsData] = useState({});
function handleChange(event) {
  let val = event.target.value;
  if(val!=="")
  setBtn(true);
  else
  setBtn(false);
  setName(val);
}
function handleWeather() {
  let val = 0;
  console.log("here");
  axios
      .get("http://api.weatherapi.com/v1/current.json?key=9bd0a5a1ee2c47ab85052809211008&q="+name+"&aqi=no")
      .then(res => {
        if(res.data) {
            setWeatherData(res.data);
            props.set1(res.data);
            history.push("/weather")
        }
      });
      console.log(val);
      return val;
}
function handleSports() {
  axios
  .get("http://api.weatherapi.com/v1/sports.json?key=9bd0a5a1ee2c47ab85052809211008&q="+name)
  .then(res => {
    if(res.data) {
      console.log(res.data);
        setSportsData(res.data);
        props.set2(res.data);
        history.push("/sports")
    }
  });
}
console.log(weatherData);
return (
        <div>
        <label for="name"><h1>Country's name</h1></label>
        <input onChange={handleChange} value={name} autoComplete="off" type="text" id="name"/>
        <Button id="1" onClick1={handleWeather} condition={btn} name={"click here to check weather"} />
        <Button id="2" onClick2={handleSports} condition={btn} name={"click here to check sports"} />
        </div>
      );
    }
    export default Home;
