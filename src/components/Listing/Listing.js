import React from "react";
import "./Listing.css";
import { Link } from "react-router-dom";

import starOutline from "../../images/star-outline.svg"
import starFilled from "../../images/pinkStar.png"

class Listing extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      isFavorited: this.props.favorite,
      starFilled: starFilled,
      starOutline: starOutline,
      starImage: (this.props.favorite ? "starFilled" : "starOutline")
    }
  }


  favoriteThisListing = (event) => {
    let id = event.target.id
    const favoritedListing = {
      ...this.props.data,
      image: this.props.imageA,
    }

    let imageName;
    this.state.isFavorited ?
    imageName = "starOutline" :
    imageName = "starFilled"
    this.setState({isFavorited: !this.state.isFavorited,
                    starImage: imageName})
    let fromFavorites = false;
    if (this.props.comingFromFavorites){
      fromFavorites = true
    }
    this.props.favoriteListing(favoritedListing, fromFavorites)
    if (fromFavorites){
      this.props.updateFavoriteState(id)
    }
  }


  render() {
  return(
    <div className="individual-listing">
      <img id ={this.props.data.listing_id} src = {this.state[this.state.starImage]} className="favorite-star" alt="favorite"
        onClick={this.favoriteThisListing} />
      <h3>{this.props.data.name}</h3>
      <img className="listing-image" src = {this.props.imageA} alt={this.props.data.name} />
      <Link to={`/areas/${this.props.data.area_id}/listings/${this.props.data.listing_id}`}><button className="listing-button">Full Listing!</button></Link>
    </div>
  )
 }
}

export default Listing;
