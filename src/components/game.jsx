import React from "react";

function Game(props) {
  function scanArr(elem) {
    return <li>{elem}</li>
  }
return(
  <div className="football game">
  <ul><h1>{props.name}</h1></ul>
  {props.data.length!==0 ? props.data.map(scanArr): <p>no data on API</p>}
  </div>
);
}

export default Game;
