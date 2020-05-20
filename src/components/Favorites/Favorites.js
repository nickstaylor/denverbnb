import React from "react";
import Listing from "../Listing/Listing"

import { Link } from "react-router-dom";


class Favorites extends React.Component{
  constructor(props){
    super(props)
      console.log(props)
    this.state = {
      favoriteListings: this.props.favorites

    }
  }

updateFavoriteState = (id) => {
  let updatedFavorites = this.state.favoriteListings.filter(favorite =>{
    return favorite.listing_id !== parseInt(id)
  })
  this.setState({favoriteListings: [...updatedFavorites]})
  this.props.updateFavoritesfromFavorites(updatedFavorites)
  console.log('stateFavoriteListings', this.state.favoriteListings)
  console.log('updatedFavorites', updatedFavorites);
}


render() {
  console.log('stateFavoriteListings', this.state.favoriteListings)
  const individualListings = this.props.favorites.map(listing => {
    const imagePathA = `/repoImages/${listing.listing_id}_a.jpg`;
    return (
      <Listing
      favorite={true}
      imageA={imagePathA}
      key={listing["listing_id"]}
      data={listing}
      favoriteListing={this.props.favoriteListing}
      comingFromFavorites={true}
      updateFavoriteState={this.updateFavoriteState}
      />
    )
  })
  const { user } = this.props
  return(
    <div className="area-container" title="areaContainer">
    <div className="area-container-locations">
        <div className="area-header">
          <h2>Your Favorites</h2>
          <h4 className="personal-greeting">Welcome, <span>{user.userName}</span>.  Find a great {user.userPurpose === 'other' ? '': <span>{user.userPurpose}</span> } rental in Denver!</h4>
    </div>
      {individualListings}
    </div>
    </div>
    )
}
}

export default Favorites;
