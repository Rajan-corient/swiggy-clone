import React, { useEffect, useState } from 'react'
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { restaurantUrl } from "../utils/constant";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch(restaurantUrl);
      const data = await res.json();
      const arr = data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantList(arr?.map(item => item.info));
      console.log("arr", arr);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    restaurantList.length === 0 ? <Shimmer /> :
    <div className="restaurant-container">
      {
        restaurantList.map(item => {
          return <RestaurantCard key={item.id} resData={item} />
        })
      }
    </div>
  )
}

export default Body