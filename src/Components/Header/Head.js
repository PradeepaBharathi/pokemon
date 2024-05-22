import React, { useState } from "react";
import "./head.css";
import logo from "../../assests/logo.png";
import bulb from "../../assests/bulb.png";
import { useTheme } from "../context/Context";

function Header() {
  const { toggleTheme } = useTheme();
  const [bulbColor, setBulbColor] = useState("#e9ecef");
  const handleBulbClick = () => {
    setBulbColor("#ffffff"); // Change bulb color to white
    toggleTheme(); // Toggle theme
  };

  return (
    <div className={` head-container `}>
      <div className="home-container">
        <img src={logo} alt="head-logo" className="head-logo" />
        <img
          src={bulb}
          className="bulbright"
          alt="bulb-logo"
          style={{ backgroundColor: bulbColor }}
          onClick={handleBulbClick}
        />
      </div>
    </div>
  );
}

export default Header;
