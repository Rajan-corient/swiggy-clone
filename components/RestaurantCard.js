import React from 'react'
import { imageUrl, starImageUrl } from "../utils/constant"
import star from "../assets/star.svg";

const RestaurantCard = ({resData}) => {
  return (
    <div className="res-card"> 
      <div className="offers-container">
        <img className="res-img" src={imageUrl+resData?.cloudinaryImageId} alt="" />
        <div className="offers">
          <span>{resData?.aggregatedDiscountInfoV3?.header}</span>
          <span>{resData?.aggregatedDiscountInfoV3?.subHeader}</span>
        </div>
      </div>
      <div className="res-info">
        <div className="res-name">
          {resData?.name}
        </div>
        <div className="rating">
          <div> 
            <img className="star-img" src={starImageUrl} alt="star" /> 
          </div>
          <div> {resData?.avgRating} </div>
        </div>
        <div className="text-style">{resData?.cuisines.join(", ")}</div>
        <div className="text-style">{resData?.areaName}</div>
      </div>
    </div>
  )
}

export default RestaurantCard