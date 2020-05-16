import React from "react";
import "./Area.css";



const Area = ({area}) => {
console.log(area)
    return (
        <section className="area-box">
          <img className="area-image" src={area.image} alt={area.name} />
          <p className="area-title">{area.name} {area.name !== area.nickname ? `(${area.nickname})` : ''}</p>
          <p className="area-location">{area.location}</p>
          <p className="area-description">{area.about}</p>
          <button className="area-button">View Listings</button>
        </section>
    )
}


export default Area;
