import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="./images/nmt-logo.png" alt="Logo" className="navbar-logo" />
      </Link>
      <div className="navbar-links">
        <Link to="/about">About Us</Link>
        <Link to="/tikanga">Tikanga</Link>
        <Link to="/hne">Hui & Events</Link>
      </div>
    </div>
  );
}
