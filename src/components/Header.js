import React from "react";
import "../styles/Header.css";
import NavBar from "../components/Navbar.js";

function Header() {
  return (
    <div className="header">
      <div className="left-zone">
        <h1 className="site_name">CV CREATOR</h1>
      </div>
      <div className="right-zone">
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default Header;
