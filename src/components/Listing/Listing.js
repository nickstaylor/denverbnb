import React from "react";
import "./Listing.css";
// import starOutline from "../../../public/star-outline.svg"

import { Link, Redirect } from "react-router-dom";


const Listing = (props) => {
    console.log('listingProps', props)

    // <Link to={ `/areas/${area.id}/listings` }><button  className="area-button" value={area.id} >View Listings</button></Link>
return(
  <div className="individual-listing">
    <h3>{props.data.name}</h3>
    <img className="listing-image" src = {props.imageA} />
    <section className="listing-buttons">
    <Link className="listing-button" to={`/areas/${props.data.area_id}/listings/${props.data.listing_id}`}>See Listing</Link>
    <button className="listing-button" onClick={props.favoriteListing} value={props.data.listing_id} >Favorite Me!</button>
    </section>
  </div>

)
}

export default Listing;
