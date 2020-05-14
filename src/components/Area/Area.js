import React from "react";
import "./Area.css";



const Area = (props) => {

    return (
      <div className="area">
        <p>{props.name}</p>
        <img className="area-image" src={props.image} alt={props.name} />
      </div>
    )
}


export default Area;
