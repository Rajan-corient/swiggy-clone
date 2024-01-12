import React, { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantUrl } from "../utils/constant";
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const { searchText, setSearchText } = useContext(SearchContext);
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterRestaurantList();
  }, [searchText]);

  const fetchData = async () => {
    try {
      const res = await fetch(restaurantUrl);
      const data = await res.json();
      const arr =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantList(arr?.map((item) => item.info));
      setFilteredRestaurantList(arr?.map((item) => item.info));
    } catch (error) {
      console.log(error);
    }
  };

  const filterRestaurantList = () => {
    console.log("searchText", searchText);
    const filteredList = restaurantList.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantList(filteredList);
  };

  return filteredRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-container">
      {filteredRestaurantList.map((item) => (
        <Link
          key={item.id}
          to={`restaurant/${item.id}`}
          className="res-card-link"
        >
          <RestaurantCard resData={item} />
        </Link>
      ))}
    </div>
  );
};

export default Body;
