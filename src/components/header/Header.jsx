import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="header__logo--wrapper">
        <img src={logo} alt="" className="header__logo" />
      </div>
      <form className="header__search--wrapper">
        <select className="header__category-select">
          <option value="">All</option>
          <option value="">Toys</option>
          <option value="">Laptops</option>
        </select>
        <input type="text" className="header__search" placeholder="Search what you want" />
        <button type="submit" className="header__search-btn"> <FiSearch/> </button>
      </form>
      <button className="header__account-loginbtn">Login</button>
    </header>
  );
};

export default Header;
