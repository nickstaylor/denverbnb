import React, { Component } from "react";
import "./App.css";
import Login from "../Login/Login";
import Header from "../Header/Header";
import MainPageContainer from "../MainPageContainer/MainPageContainer";
import Favorites from "../Favorites/Favorites";
import { fetchingApi, getIndividualListing } from "../../apiCalls/apiCalls";

import caphill from "../../images/CapHill.png";
import lohi from "../../images/LoHi.png";
import parkhill from "../../images/ParkHill.png";
import rino from "../../images/RiNo.png";

import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      areas: [],
      favoriteListingsID: [], // just the id's of the listings
      favoriteListings: [], //object instances of listing
      error: "",
      images: [caphill, lohi, parkhill, rino],
    };
  }

  componentDidMount = async () => {
    const fetchingApis = await fetchingApi();
    const eachListingArray = await getIndividualListing(fetchingApis);
    Promise.all(eachListingArray)
      .then((array) => this.setState({ areas: array }))
      .catch((error) => this.setState({ error }));
  };

  addUser = (person) => {
    this.setState({ user: person });
  };

  removeUser = () => {
    this.setState({ user: "" });
    return <Redirect to="/" exact />;
  };

  favoriteListing = (value, fromFavorites) => {
    this.updateFavorites(value, fromFavorites);
  };

  updateFavorites = (value) => {
    let id = value.listing_id;
    if (!this.state.favoriteListingsID.includes(id)) {
      this.setState({
        favoriteListingsID: [...this.state.favoriteListingsID, id],
      });
    } else {
      let newFavorites = this.state.favoriteListingsID.filter((listing) => {
        return listing !== id;
      });
      this.setState({ favoriteListingsID: newFavorites });
    }
  };

  updateFavoritesfromFavorites = (array) => {
    this.setState({ favoriteListings: array });
  };

  loadFavorites = () => {
    let favorites = this.state.areas.reduce((acc, area) => {
      area.listings.forEach((listing) => {
        this.state.favoriteListingsID.forEach((id) => {
          if (listing.listing_id === id) {
            acc.push(listing);
          }
        });
      });
      return acc;
    }, []);
    this.setState({ favoriteListings: favorites });
  };

  render() {
    console.log('Favorite IDs on APP', this.state.favoriteListingsID)
    return (
      <section className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Login addUser={this.addUser} />}
          />
          {this.state.user ? (
            <Route
              path="/areas"
              render={() => (
                <>
                  {" "}
                  <Header
                    removeUser={this.removeUser}
                    numberofFavorites={this.state.favoriteListingsID}
                    loadFavorites={this.loadFavorites}
                  />{" "}
                  <MainPageContainer
                    favoriteListingsID={this.state.favoriteListingsID}
                    user={this.state.user}
                    data={this.state.areas}
                    updateFavorites={this.updateFavorites}
                    images={this.state.images}
                  />{" "}
                </>
              )}
            />
          ) : (
            <Redirect to="/" exact />
          )}
          {
            <Route
              path="/favorites"
              render={() => (
                <>
                  {" "}
                  <Header
                    removeUser={this.removeUser}
                    numberofFavorites={this.state.favoriteListingsID}
                    loadFavorites={this.loadFavorites}
                  />{" "}
                  <Favorites
                    updateFavoritesfromFavorites={
                      this.updateFavoritesfromFavorites
                    }
                    favorites={this.state.favoriteListings}
                    user={this.state.user}
                    updatesFavorites={this.updateFavorites}
                    favoriteListing={this.favoriteListing}
                  />{" "}
                </>
              )}
            />
          }
        </Switch>
      </section>
    );
  }
}

export default App;
