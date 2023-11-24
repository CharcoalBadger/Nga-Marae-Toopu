import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./hamburgermenu.css";

export default function HamburgerMenu({ isActive, toggleMenu }) {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu();
      }
    };

    // Add event listener when the menu is active
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, toggleMenu]);

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
        <div ref={menuRef} className="hamburger-dropdown">
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="/tikanga" onClick={toggleMenu}>
            Tikanga
          </Link>
          <Link to="/hne" onClick={toggleMenu}>
            Hui & Events
          </Link>
          <Link to="/nmt" onClick={toggleMenu}>
            Marae Representatives
          </Link>
        </div>
      )}
    </div>
  );
}
