import React from "react";
import "./Listing.css";
// import starOutline from "../../../public/star-outline.svg"

import { Link, Redirect } from "react-router-dom";


const Listing = (props) => {
    console.log('listing', props)

    // <Link to={ `/areas/${area.id}/listings` }><button  className="area-button" value={area.id} >View Listings</button></Link>
return(
  <div className="individual-listing">
    <h3>{props.data.name}</h3>
    <Link to={`/areas/${props.data.area_id}/listings/${props.data.listing_id}`}><button>See Listing</button></Link>
    <button onClick={props.favoriteListing} value={props.data.listing_id} >Favorite Me!</button>
  </div>

)
}

export default Listing;
