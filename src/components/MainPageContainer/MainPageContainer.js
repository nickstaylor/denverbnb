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


favoriteListing = (event) => {
  const { value } = event.target
  console.log('favoriteListing', value)
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
  console.log('mainpagestate', this.state.favoriteListings)
  const { user } = this.props;
  const { data } = this.props;

return(
  <div className="area-container">
    <div className="area-header">
      <h2>Denver NeighborHoods</h2>
      <h4 className="personal-greeting">Welcome, <span>{user.userName}</span>.  Find a great {user.userPurpose === 'other' ? '': <span>{user.userPurpose}</span> } rental in Denver!</h4>
    </div>
    <Switch >
      <Route path='/areas/:id/listings/:listing_id' exact
      render = {({ match }) => {
        const { listing_id } = match.params
        console.log('match', match)
        const { id } = match.params
        console.log(id)
        const uniqueListing = this.state.areas.find(area => area.id === parseInt(id))
        .listings.find(listing => listing.listing_id === parseInt(listing_id))

        console.log(listing_id)
        console.log('uniqueListing', uniqueListing)

        return (
          <SingleBigListing {...uniqueListing}/>
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
