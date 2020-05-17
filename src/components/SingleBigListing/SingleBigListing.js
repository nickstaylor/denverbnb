import React from "react";
import "./SingleBigListing.css";
// import starOutline from "../../../public/star-outline.svg"

import { Link } from "react-router-dom";


const SingleBigListing = (props) => {
  const imagePathA = `/repoImages/${props.listing_id}_a.jpg`;
  const imagePathB = `/repoImages/${props.listing_id}_b.jpg`;
  const imagePathC = `/repoImages/${props.listing_id}_c.jpg`;
    console.log('SingleBigListing', props)

    // <Link to={ `/areas/${area.id}/listings` }><button  className="area-button" value={area.id} >View Listings</button></Link>
    return(
  <div>
  <h3>hello i'm the big listing</h3>
  <img src={imagePathB} />
  </div>

  )
}

export default SingleBigListing;
