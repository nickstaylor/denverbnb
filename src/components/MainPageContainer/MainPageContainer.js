import React from "react";
import "./MainPageContainer.css";
import AreaContainer from '../AreaContainer/AreaContainer'
import AllListings from '../AllListings/AllListings'
import SingleBigListing from '../SingleBigListing/SingleBigListing'
import Header from '../Header/Header'
import Favorites from "../Favorites/Favorites"

import { Switch, Route, Redirect } from "react-router-dom";

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      areas: props.data,
    }
  }

favoriteListing = (value) => {
  this.props.updateFavorites(value)
}

render() {
  const { user } = this.props;
  const { data } = this.props;
return(
  <div className="area-container" title="areaContainer">
    <Switch >
      <Route path='/areas/:id/listings/:listing_id' exact
      render = {({ match }) => {
        const { listing_id } = match.params
        const { id } = match.params
        const uniqueListing = this.state.areas.find(area => area.id === parseInt(id))
        const areaName = uniqueListing.name
        const bigListing = uniqueListing.listings.find(listing => listing.listing_id === parseInt(listing_id))

        return (
          <SingleBigListing {...bigListing} key={bigListing.listing_id} areaName={areaName} user={user} favoriteListing={this.favoriteListing}/>
        )
      }}
      />
      <Route path='/areas/:id/listings' exact
        render = {({ match }) => {
          const { id } = match.params
          const uniqueArea = this.state.areas.find(area => area.id === parseInt(id))
          return (
            <AllListings {...uniqueArea} user={user} favoriteListing={this.favoriteListing} />
          )
        }}
      />
      <Route path='/areas' exact
        render = {() => <AreaContainer user={user} data={data}/> }
      />
      <Route path= '/favorites' exact
      render = { () => <Favorites {...this.state.favoriteListings} user={user} favoriteListing={this.favoriteListing} />}
       />

    </Switch>
  </div>

)
}
}
export default MainPageContainer;
