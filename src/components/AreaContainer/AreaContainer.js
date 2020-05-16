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
      {displayPics}
    </div>
)
}

export default AreaContainer;
