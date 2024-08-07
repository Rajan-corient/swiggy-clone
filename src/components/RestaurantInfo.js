import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { restaurantInfoUrl } from "../utils/constant";

const RestaurantInfo = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [menuList, setMenuList] = useState(null);
  const routeParams = useParams();

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    try {
      const res = await fetch(`${restaurantInfoUrl}${routeParams.resId}`);
      const json = await res.json();
      console.log("resinfo", json);
      const restaurantData = json?.data?.cards?.[2]?.card?.card?.info;
      const menuArr =
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
          ?.card?.card?.itemCards || [];
      setRestInfo(restaurantData);
      setMenuList(menuArr);
    } catch (error) {
      console.log(error);
    }
  };

  if (!restInfo) {
    return "Loading...";
  }

  return (
    <div>
      <h2>{restInfo.name}</h2>
      <div>
        <span>{restInfo.areaName}</span>,
        <span>{restInfo.sla.lastMileTravel}Km</span>
      </div>
      <div>
        <span>{restInfo.sla.slaString}</span>
        <span>{restInfo.costForTwoMessage}</span>
      </div>

      <div>
        <h2>Menu List</h2>
        <ul>
          {menuList?.map((menuItem) => {
            const {
              id,
              name,
              price,
              defaultPrice,
              description,
              isVeg,
              imageId,
              ratings,
            } = menuItem?.card?.info;
            return (
              <li key={id} className="menu-item">
                <span className="name">{name}</span>
                <span className="price">{(price || defaultPrice) / 100}</span>
                <span className="description">{description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
