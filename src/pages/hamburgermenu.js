import React from "react";
import { Link } from "react-router-dom";
import "./hamburgermenu.css";

export default function HamburgerMenu({ isActive, toggleMenu }) {
  return (
    <div className={`hamburger-container ${isActive ? "active" : ""}`}>
      <Link to="/">
        <img
          src="./images/nmt-logo.png"
          alt="Logo"
          className="hamburger-logo"
        />
      </Link>
      <div className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </div>
      {isActive && (
        <div className="hamburger-dropdown">
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="/tikanga" onClick={toggleMenu}>
            Tikanga
          </Link>
          <Link to="/hne" onClick={toggleMenu}>
            Hui & Events
          </Link>
        </div>
      )}
    </div>
  );
}
