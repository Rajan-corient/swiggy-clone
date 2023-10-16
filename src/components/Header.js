import React, { useState } from 'react'
import logo from "../assets/logo.svg";
import { searchIconUrl } from "../utils/constant";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const onRestaurantSearch = (val) => {
    console.log(val);
    setSearchText(val);
  }


  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-container">
        <div className="input-box">
          <input 
          type="text" 
          name="search" 
          id="search" 
          value={searchText}
          onChange={(e) => {onRestaurantSearch(e.target.value)}}
          />
        </div>
        <div className="search-icon">
          <img src={searchIconUrl} alt="search" />
        </div>
      </div>
      <div className="nav-list-container">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header