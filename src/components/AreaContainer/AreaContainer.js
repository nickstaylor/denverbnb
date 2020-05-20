import React from "react";
import "./AreaContainer.css";
import Area from '../Area/Area'


const AreaContainer = ({data, user}) => {
  const displayPics = data.map(area=>{
    return (
      <Area
      key = {area.id}
      area = {area}
      />
    )

  })

return(
    <div className="area-container-locations">
    <div className="area-header">
    <h2>Denver Neighborhoods</h2>
    <h4 className="personal-greeting">Welcome, <span>{user.userName}</span>.  Find a great {user.userPurpose === 'other' ? '': <span>{user.userPurpose}</span> } rental in Denver!</h4>
  </div>
      {displayPics}
    </div>
)
}

export default AreaContainer;
