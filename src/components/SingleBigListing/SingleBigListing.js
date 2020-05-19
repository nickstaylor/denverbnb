import React from "react";
import "./SingleBigListing.css";

import { Link } from "react-router-dom";


const SingleBigListing = (props) => {
  const { user } = props
  const imagePathA = `/repoImages/${props.listing_id}_a.jpg`;
  const imagePathB = `/repoImages/${props.listing_id}_b.jpg`;
  const imagePathC = `/repoImages/${props.listing_id}_c.jpg`;
  console.log(props)
  const features = props.details.features.map(feature => {
  return (
  <p className="someFeatures">{`-${feature}`}</p>
    )
  })
    return(
  <div className="entireSingleBigListing">
    <div className="area-header">
    <h2><Link to="/areas">Denver NeighborHoods</Link> ><Link to={`/areas/${props.area_id}/listings`}>{props.areaName}</Link> > {props.name}</h2>      <h4 className="personal-greeting">Welcome, <span>{user.userName}</span>.  Find a great {user.userPurpose === 'other' ? '': <span>{user.userPurpose}</span> } rental in Denver!</h4>
    </div>
    <div className="leftSideContainer">
      <h3 className="bigListingName">{props.name}</h3>
      <div className="bigListingImageContainer">
        <img className="bigListingImage" src={imagePathA} />
        <img className="bigListingImage" src={imagePathB} />
        <img className="bigListingImage" src={imagePathC} />
      </div>
    </div>
    <div className="rightSideContainer">
      <h3 className="bigListingBedBathCount">{
        `${props.details.beds}beds-${props.details.baths}baths`
        }<span className="costPerNight">
        {`$${props.details.cost_per_night}perNight`}
        </span>
      </h3>
      <p className="areaInfo">{`${props.address.street}, ${props.address.zip}`}</p>
      <p className="featureTitle">Check out some features:</p>
      {features}
    </div>
  </div>
  )
}

export default SingleBigListing;
