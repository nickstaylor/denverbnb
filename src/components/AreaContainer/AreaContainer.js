import React from "react";
import "./AreaContainer.css";
import Area from '../Area/Area'


const AreaContainer = ({data}) => {
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
    {displayPics}
    </div>
)
}

export default AreaContainer;
