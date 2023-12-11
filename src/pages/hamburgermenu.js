import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./hamburgermenu.css";

export default function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // If the click is outside the menu and the menu is active, close it
      if (!event.target.closest("#menuToggle") && isActive) {
        setIsActive(false);
      }
    };

    // Add the event listener
    window.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isActive]); // Only re-run if isActive changes

  useEffect(() => {
    const handleScroll = () => {
      const blackBand = document.querySelector(".blackband");
      if (window.scrollY > 250) {
        blackBand.classList.add("scrolled");
      } else {
        blackBand.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hamburger-container">
      <div className="blackband"></div>
      <Link to="/">
        <img
          src="./images/nmt-logo-t3.png"
          alt="Logo"
          className="hamburger-logo"
        />
      </Link>
      <div id="menuToggle">
        <input
          type="checkbox"
          onClick={toggleMenu}
          checked={isActive}
          readOnly
        />
        <span></span>
        <span></span>
        <span></span>
        <div className="hamburger-dropdown">
          <Link to="/about" onClick={toggleMenu}>
            About Us <div className="dropdown-separator"></div> Whakahaere
          </Link>
          <Link to="/tikanga" onClick={toggleMenu}>
            History <div className="dropdown-separator"></div> Hitori
          </Link>
          <Link to="/hne" onClick={toggleMenu}>
            Events <div className="dropdown-separator"></div> Hui
          </Link>
          <Link to="/nmt" onClick={toggleMenu}>
            Marae Representatives <div className="dropdown-separator"></div>{" "}
            Ngaa Toopu Marae
          </Link>
        </div>
      </div>
    </div>
  );
}
