import React from "react";
import "./MainPageContainer.css";
import AreaContainer from '../AreaContainer/AreaContainer'
import AllListings from '../AllListings/AllListings'
import SingleBigListing from '../SingleBigListing/SingleBigListing'
// import Favorites from '../Favorites/Favorites'

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
  if (!this.state.favoriteListings.includes(value)){
  this.setState({favoriteListings: [...this.state.favoriteListings, value]})
} else {
  let newFavorites = this.state.favoriteListings.filter(listing=>{
    return listing !== value
  })
  this.setState({favoriteListings: newFavorites})
}
}

render() {
  const { user } = this.props;
  const { data } = this.props;

return(
  <div className="area-container">
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
          console.log('listing ID', id)
          const uniqueArea = this.state.areas.find(area => area.id === parseInt(id))
          return (
            <AllListings {...uniqueArea} user={user} favoriteListing={this.favoriteListing} />
          )
        }}
      />
      <Route path='/areas' exact
        render = {() => <AreaContainer user={user} data={data}/> }
      />
    </Switch>
  </div>

)
}
}
export default MainPageContainer;
