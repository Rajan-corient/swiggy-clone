import React from 'react'
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-container">
        <input type="text" name="search" id="search" />
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