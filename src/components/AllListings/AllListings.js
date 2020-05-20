import React from "react";
import "./AllListings.css";
import Listing from "../Listing/Listing"

import { Link } from "react-router-dom";


const AllListings = (props)=>{

//we have the ID's of the favorites, we need to map through the listings, match the id,
//does each listing contain the ID, if it does, tehn favorite is going to be true


  const { user } = props
  const individualListings = props.listings.map(listing => {
    let isFavorite = null;
    const imagePathA = `/repoImages/${listing.listing_id}_a.jpg`;
      props.favoriteListingsID.forEach(id=> {
        if (parseInt(id) === listing.listing_id){
          isFavorite = true
      } else {isFavorite = false}
    })
    return (
      <Listing
      favorite={isFavorite}
      comingFromFavorites={false}
      imageA={imagePathA}
      key={listing["listing_id"]}
      data={listing}
      favoriteListing={props.favoriteListing}
      />
    )
  })

  return(
    <div className="area-container-locations">
      <div className="area-header">
      <h2><Link to="/areas" exact>Denver Neighborhoods</Link> > {props.name}</h2>
      <h4 className="personal-greeting">Welcome, <span>{user.userName}</span>.  Find a great {user.userPurpose === 'other' ? '': <span>{user.userPurpose}</span> } rental in Denver!</h4>
    </div>
    {individualListings}
    </div>
    )
}


export default AllListings;
