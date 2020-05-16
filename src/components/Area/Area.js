import React from "react";
import "./Area.css";
import {Router, Link} from 'react-router-dom'


class Area extends React.Component {
  constructor (props) {
    super( props )
  }

  viewListings() {
    return (
      <Link to={ `/area/${this.props.area.id}/listings` } exact></Link>
    )
  }

  render() {

    const { area } = this.props
    return (
        <section className="area-box">
          <img className="area-image" src={area.image} alt={area.name} />
          <p className="area-title">{area.name} {area.name !== area.nickname ? `(${area.nickname})` : ''}</p>
          <p className="area-location">{area.location}</p>
          <p className="area-description">{area.about}</p>
          <button className="area-button" onClick={this.viewListings}>View Listings</button>
        </section>
    )
  }
  
}

export default Area;
