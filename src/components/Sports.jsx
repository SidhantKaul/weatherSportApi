import React from "react";
import Game from "./game";
import { useHistory } from "react-router-dom";
function Sports(props) {
  const history = useHistory();
  if(!props.data.football) {
    history.push("/");
    return null;
  }
  return (
    <div>
      <Game name="FootBall" data={props.data.football} />
      <Game name="Cricket" data={props.data.cricket} />
      <Game name="Golf" data={props.data.golf} />
  </div>
);
}

export default Sports;
