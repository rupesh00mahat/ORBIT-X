import React from "react";
import "../style.css";
import { FaSpaceAwesome } from "react-icons/fa6";

function Navbar() {
  return (
    <div id="navbar">
      <h2 className="logo-title">
        <FaSpaceAwesome />
        ORBIT-X
      </h2>
      <ul id="nav-list">
        <li className="nav-item">
          About
          <a />
        </li>
        <li className="nav-item">
          Technology
          <a />
        </li>
        <li className="nav-item">
          Galaxy
          <a />
        </li>
        <li className="nav-item">
          Satellite
          <a />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
