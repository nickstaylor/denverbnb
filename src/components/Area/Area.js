import React from "react";
import "./Area.css";
import {Router, Link, Redirect} from 'react-router-dom'


class Area extends React.Component {
  constructor (props) {
    super( props )
    this.state ={}
  }

  render() {

    const { area } = this.props
    return (
        <section className="area-box">
          <img className="area-image" src={area.image} alt={area.name} />
          <p className="area-title">{area.name} {area.name !== area.nickname ? `(${area.nickname})` : ''}</p>
          <p className="area-location">{area.location}</p>
          <p className="area-description">{area.about}</p>
          <Link to={ `/areas/${area.id}/listings` }><button  className="area-button" value={area.id} >View Listings</button></Link>
        </section>
    )
  }
  
}

export default Area;
