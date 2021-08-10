import React from "react";
import { useHistory } from "react-router-dom";
function Button(props) {
  const history = useHistory();
  async function handleClick(e) {
    let val;
    console.log("here");
    console.log(props);
    if(props.id==="1") {
      console.log("xxxx");
     await props.onClick1();

    }
    else if(props.id==="2") {
      await props.onClick2();
    }
  }
  return(
    <div className="buttons">
    {props.condition ? <button onClick={handleClick} name={props.key} className="btn">{props.name}</button> : <button disabled className="btn">{props.name}</button>}
    </div>
  );
}


export default Button;
