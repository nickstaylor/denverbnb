import React from "react";
import "./Listing.css";
import { Link } from "react-router-dom";

import starOutline from "../../images/star-outline.svg"
import starFilled from "../../images/pinkStar.png"

class Listing extends React.Component {
  constructor(props){
    console.log('listingProps', props)
    super(props)
    this.state = {
      isFavorited: false,
      starFilled: starFilled,
      starOutline: starOutline,
      starImage: "starOutline"
    }
  }

  favoriteThisListing = (event) => {
    let imageName;
    const value = event.target.id;
    this.state.isFavorited ? 
    imageName = "starOutline" :
    imageName = "starFilled"
    this.setState({isFavorited: !this.state.isFavorited,
                    starImage: imageName})
    this.props.favoriteListing(value)
  }

  render() {
  return(
    <div className="individual-listing">
      <img id ={this.props.data.listing_id} src = {this.state[this.state.starImage]} className="favorite-star" alt="favorite"
        onClick={this.favoriteThisListing} />
      <h3>{this.props.data.name}</h3>
      <img className="listing-image" src = {this.props.imageA} />
      <Link to={`/areas/${this.props.data.area_id}/listings/${this.props.data.listing_id}`}><button className="listing-button">Full Listing!</button></Link>
    </div>
  )
 }
}
export default Listing;
