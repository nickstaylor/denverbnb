import React from "react";
import "./AreaContainer.css";
import Area from '../Area/Area'


const AreaContainer = ({data, user}) => {
  console.log('user', user)
  console.log('data', data)
  const displayPics = data.map(area=>{
    return (
      <Area
      name = {area.area}
      image = {area.image}
      />
    )

  })

return(
  <div>
    <div className="area-header">
      <h2>Denver NeighborHoods</h2>
      <h4>Welcome, {user.userName}.  Find a great {user.userPurpose === 'other' ? '': user.userPurpose } rental in Denver!</h4>
    </div>
    <div className="area-container">
      {displayPics}
    </div>
  </div>

)
}

export default AreaContainer;
