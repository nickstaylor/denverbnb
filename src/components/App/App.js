import React, { Component } from "react";
import "./App.css";
import Login from "../Login/Login";
import Header from "../Header/Header";
import AreaContainer from "../AreaContainer/AreaContainer";
import MainPageContainer from "../MainPageContainer/MainPageContainer";



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
      favorites: [],
      error: "",
    };
  }

  componentDidMount = () => {
    const array = [];
    const baseURL = "https://vrad-api.herokuapp.com";
    fetch(`${baseURL}/api/v1/areas`)
      .then((response) => response.json())
      .then((someInfo) => {
        someInfo.areas.map((neighborhood) => {
          return fetch(`${baseURL}${neighborhood.details}`)
            .then((moreInfo) => moreInfo.json())
            .then((singleNeighborhood) => {
              const listingPromises = singleNeighborhood.listings.map(
                (listing) => {
                  return fetch(`${baseURL}${listing}`).then((listingData) =>
                    listingData.json()
                  );
                }
              );
              return Promise.all(listingPromises)
                .then((data) => {
                  return {
                    ...singleNeighborhood,
                    nickname: neighborhood.area,
                    listings: data,
                  };
                })
                .then((areaInfo) => {
                  array.push(areaInfo);
                  return array;
                })
                .then((completedData) => {
                  completedData.forEach((area) => {
                    if (area.nickname === "RiNo") {
                      area.image = rino;
                    }
                    if (area.nickname === "Park Hill") {
                      area.image = parkhill;
                    }
                    if (area.nickname === "LoHi") {
                      area.image = lohi;
                    }
                    if (area.nickname === "Cap Hill") {
                      area.image = caphill;
                    }
                  });
                  return completedData;
                })
                .then((array) => this.setState({ areas: array }))
                .catch((error) => this.setState({ error }));
            });
        });
      });
  };

  addUser = (person) => {
    this.setState({ user: person });
  };

  removeUser = () => {
    this.setState({ user: "" });
    return <Redirect to="/" exact />;
  };


  render() {
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
                  <Header removeUser={this.removeUser} />{" "}
                  <MainPageContainer
                    user={this.state.user}
                    data={this.state.areas}
                  />{" "}
                </>
              )}
            />
          ) : (
            <Redirect to="/" exact />
          )}
        </Switch>
      </section>
    );
  }
}

export default App;
