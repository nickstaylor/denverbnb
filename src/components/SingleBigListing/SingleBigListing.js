import React from "react";
import "./SingleBigListing.css";
import starOutline from "../../images/star-outline.svg"
import starFilled from "../../images/pinkStar.png"

import { Link } from "react-router-dom";

class SingleBigListing extends React.Component {
constructor(props){
  super(props)
  console.log(props)
    this.state = {
    isFavorited: this.props.favorite,
    starFilled: starFilled,
    starOutline: starOutline,
    starImage: (this.props.favorite ? "starFilled" : "starOutline")
  }
}

favoriteThisListing = (event) => {
  let id = event.target.id
  console.log(this.props)
  const favoritedListing = {
    listing_id: this.props.listing_id
  }
  console.log('favoritedListing', favoritedListing)

  let imageName;
  this.state.isFavorited ?
  imageName = "starOutline" :
  imageName = "starFilled"
  this.setState({isFavorited: !this.state.isFavorited,
                  starImage: imageName})
  this.props.favoriteListing(favoritedListing)
  // if (fromFavorites){
  //   this.props.updateFavoriteState(id)
  // }
}
  render(){
    const { user } = this.props
    const imagePathA = `/repoImages/${this.props.listing_id}_a.jpg`;
    const imagePathB = `/repoImages/${this.props.listing_id}_b.jpg`;
    const imagePathC = `/repoImages/${this.props.listing_id}_c.jpg`;
    const features = this.props.details.features.map(feature => {
      return (
        <p className="someFeatures">{`-${feature}`}</p>
      )
    })


    return(
  <div className="entireSingleBigListing">
    <div className="area-header">
    <h2><Link to="/areas">Denver NeighborHoods</Link> ><Link to={`/areas/${this.props.area_id}/listings`}>{this.props.areaName}</Link> > {this.props.name}</h2>
    <h4 className="personal-greeting">Welcome, <span>{user.userName}</span>.this.  Find a great {user.userPurpose === 'other' ? '': <span>{user.userPurpose}</span> } rental in Denver!</h4>
    </div>
    <div className="leftSideContainer">
      <h3 className="bigListingName">{this.props.name}</h3>
      <img id ={this.props.listing_id} src = {this.state[this.state.starImage]}
        className="favorite-star-big-listing" alt="favorite-big-listing"
        onClick={this.favoriteThisListing}
      />
      <div className="bigListingImageContainer">
        <img className="bigListingImage" src={imagePathA} />
        <img className="bigListingImage" src={imagePathB} />
        <img className="bigListingImage" src={imagePathC} />
      </div>
    </div>
    <div className="rightSideContainer">
      <h3 className="bigListingBedBathCount">{
        `${this.props.details.beds}beds-${this.props.details.baths}baths`
        }<span className="costPerNight">
        {`$${this.props.details.cost_per_night}perNight`}
        </span>
      </h3>
      <p className="areaInfo">{`${this.props.address.street}, ${this.props.address.zip}`}</p>
      <p className="featureTitle">Check out some features:</p>
      {features}
    </div>
  </div>
  )
}
}

export default SingleBigListing;
