import React from 'react'
import { imageUrl } from "../utils/constant"

const RestaurantCard = ({resData}) => {
  return (
    <div className="res-card restaurant-item"> 
        <img className="res-img" src={imageUrl+resData?.cloudinaryImageId} alt="" />
        <div className="rates">
          <div className="offers">
            <span>{resData?.aggregatedDiscountInfoV3?.header}</span>
            <span>{resData?.aggregatedDiscountInfoV3?.subHeader}</span>
          </div>
        </div>
    </div>
  )
}

export default RestaurantCard