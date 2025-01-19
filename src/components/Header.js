import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">Wobb</div>
    <nav className="nav">
      <a href="#">Home</a>
      <a href="#">Campaigns</a>
      <a href="#">Profile</a>
    </nav>
    <input type="text" placeholder="Search campaigns..." className="search-bar" />
  </header>
);

export default Header;