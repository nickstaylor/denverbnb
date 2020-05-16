import React from "react";
import "./MainPageContainer.css";
import AreaContainer from '../AreaContainer/AreaContainer'
// import AllListings from '../AllListings/AllListings'
// import Favorites from '../Favorites/Favorites'

import { Switch, Route, Redirect } from "react-router-dom";


class MainPageContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
    }
  }

render() {
  const { user } = this.props;
  const { data } = this.props;

return(
  <div className="area-container">
    <div className="area-header">
      <h2>Denver NeighborHoods</h2>
      <h4 className="personal-greeting">Welcome, <span>{user.userName}</span>.  Find a great {user.userPurpose === 'other' ? '': <span>{user.userPurpose}</span> } rental in Denver!</h4>
    </div>
    <Switch >
      <Route path='/areas' exact
        render = {() => <AreaContainer user={user} data={data}/> } 
      />
    </Switch>
  </div>

)
}
}
export default MainPageContainer;
