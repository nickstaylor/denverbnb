import React, { Component } from "react";
import "./App.css";
import Login from "../Login/Login";
import Header from "../Header/Header";
import AreaContainer from "../AreaContainer/AreaContainer";

import { NavLink, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      areas: [],
      error: "",
    };
  }

  componentDidMount = () => {
    const array = [];
    const baseURL = "https://vrad-api.herokuapp.com";
    fetch(`${baseURL}/api/v1/areas`)
      .then((response) => response.json())
      .then((someInfo) => {
        let promises = someInfo.areas.map((neighborhood) => {
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
                    image: `${neighborhood.area}.png`
                  };
                })
                .then((areaInfo) => {
                  array.push(areaInfo);
                  console.log(array);
                  return array;
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
          {/* {this.state.user !== '' &&} */}
          <Route
            path="/area"
            render={() => (
              <>
                {" "}
                <Header removeUser={this.removeUser} /> <AreaContainer />{" "}
              </>
            )}
          />
        </Switch>
      </section>
    );
  }
}

export default App;
