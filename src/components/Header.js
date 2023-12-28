import React, { useState , useContext} from 'react'
import { SearchContext } from '../context/SearchContext';
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search_icon.svg";

const Header = () => {
  const { searchText, setSearchText } = useContext(SearchContext);
  const [searchVal, setSearchVal] = useState("");
  console.log("Header Rendered");

  const searchHandler = (e) => {
    const val = e.target.value;
    setSearchVal(val);
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
          value={searchVal}
          onChange={searchHandler}
          />
        </div>
        <div className="search-icon">
          <img src={searchIcon} alt="search" />
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