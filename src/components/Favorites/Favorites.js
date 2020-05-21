import React from "react";
import Listing from "../Listing/Listing"
import PropTypes from 'prop-types'


class Favorites extends React.Component{
  constructor(props){
    super(props)
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
}


render() {
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

Favorites.propTypes = {
  favorites: PropTypes.array,
  user: PropTypes.object,
  updatesFavorites: PropTypes.func,
  favoriteListing: PropTypes.func
}


export default Favorites;
