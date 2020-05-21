import React from "react";
import Listing from "../Listing/Listing";
import "./Favorites.css";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteListings: this.props.favorites,
    };
  }

  updateFavoriteState = (id) => {
    let updatedFavorites = this.state.favoriteListings.filter((favorite) => {
      return favorite.listing_id !== parseInt(id);
    });
    this.setState({ favoriteListings: [...updatedFavorites] });
    this.props.updateFavoritesfromFavorites(updatedFavorites);
  };

  render() {
    const individualListings = this.props.favorites.map((listing) => {
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
      );
    });
    const { user } = this.props;
    return (
      <div
        className="favorite-listings-container"
        title="favoriteListingContainer"
      >
        <div className="favorite-listing-container-locations">
          <div className="area-header">
            <h2>Your Favorites</h2>
            <h4 className="personal-greeting">
              Welcome, <span>{user.userName}</span>. Find a great{" "}
              {user.userPurpose === "other" ? (
                ""
              ) : (
                <span>{user.userPurpose}</span>
              )}{" "}
              rental in Denver!
            </h4>
          </div>
          <section className="favorite-listings">{individualListings}</section>
        </div>
      </div>
    );
  }
}

export default Favorites;
