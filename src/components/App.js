import React,{useState} from "react";
import Home from "./Home"
import Button from "./Buttons";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Weather from "./Weather";
import Sports from "./Sports"
const axios = require('axios').default;
function App() {
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
              val = 1;
          }
        });
        console.log(val);
        return val;
  }
  function weather(data) {
    setWeatherData(data);
  }
  function sports(data) {
    setSportsData(data);
  }
  console.log(weatherData);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home set1={weather} set2={sports}/>
        </Route>
        <Route exact path="/weather">
          <Weather data={weatherData}/>
        </Route>
        <Route exact path="/sports">
          <Sports data={sportsData} />
        </Route>
        </Switch>
        </Router>
  );
}

export default App;
