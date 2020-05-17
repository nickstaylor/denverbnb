import React from "react";
import "./AllListings.css";
import Listing from "../Listing/Listing"

import { Switch, Route, Redirect } from "react-router-dom";


const AllListings = (props)=>{
  console.log('AllListings', props)
const individualListings = props.listings.map(listing => {
  return (
    <Listing
    key={listing["listing_id"]}
    data={listing}
    favoriteListing={props.favoriteListing}
    />
  )
})


  return(
      <div>
      <h3>Hi there AllListings</h3>
    <div>
    {individualListings}
    </div>

    </div>

    )
}


export default AllListings;
