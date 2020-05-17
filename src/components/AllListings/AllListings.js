import React from "react";
import "./AllListings.css";
import Listing from "../Listing/Listing"

import { Switch, Route, Redirect } from "react-router-dom";


const AllListings = (props)=>{
  console.log('AllListings', props)
const individualListings = props.listings.map(listing => {
  const imagePathA = `/repoImages/${listing.listing_id}_a.jpg`;
  return (
    <Listing
    imageA={imagePathA}
    key={listing["listing_id"]}
    data={listing}
    favoriteListing={props.favoriteListing}
    />
  )
})


  return(

    <div className="area-container-locations">
    {individualListings}
    </div>


    )
}


export default AllListings;
