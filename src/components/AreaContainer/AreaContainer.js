import React from "react";
import "./AreaContainer.css";
import Area from '../Area/Area'


const AreaContainer = ({data, user}) => {
  console.log('user', user)
  console.log('data', data)
  const displayPics = data.map(area=>{
    return (
      <Area
      area = {area}
      />
    )

  })

return(
  <div className="area-container">
    <div className="area-header">
      <h2>Denver NeighborHoods</h2>
      <h4 className="personal-greeting">Welcome, <span>{user.userName}</span>.  Find a great {user.userPurpose === 'other' ? '': <span>{user.userPurpose}</span> } rental in Denver!</h4>
    </div>
    <div className="area-container-locations">
      {displayPics}
    </div>
  </div>

)
}

export default AreaContainer;
