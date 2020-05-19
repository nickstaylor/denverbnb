import React from "react";
import "./MainPageContainer.css";
import AreaContainer from '../AreaContainer/AreaContainer'
import AllListings from '../AllListings/AllListings'
import SingleBigListing from '../SingleBigListing/SingleBigListing'

import { Switch, Route, Redirect } from "react-router-dom";

class MainPageContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      areas: props.data,
      favoriteListings: []
    }
  }

favoriteListing = (value) => {
  const foundListing = this.state.favoriteListings.find(dataObj => dataObj.listing_id === value.listing_id)
  if (!foundListing) {
      this.setState({favoriteListings: [...this.state.favoriteListings, value]})
  } else if (foundListing) {
  let newFavorites = this.state.favoriteListings.filter(listing => {
    return listing.listing_id !== value.listing_id
  })
  this.setState({favoriteListings: newFavorites})
  console.log(foundListing)
 }
}


render() {
  const { user } = this.props;
  const { data } = this.props;
console.log(this.state.favoriteListings)
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
          <SingleBigListing {...bigListing} areaName={areaName} user={user} favoriteListing={this.favoriteListing}/>
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
      <Route path='/favorites' exact
      render = { () => <AllListings {[...this.props.favoriteListings]} user={user} favoriteListing={this.favoriteListing} />} />
    </Switch>
  </div>

)
}
}
export default MainPageContainer;
