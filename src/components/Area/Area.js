import React from "react";
import "./Area.css";



const Area = (props) => {

    return (
      <div className="area">
        <section className="title-image">
          <p className="area-title">{props.name}</p>
          <img className="area-image" src={props.image} alt={props.name} />
        </section>
      </div>
    )
}


export default Area;
