import React from "react";
import "./about.css";
import Navbar from "./navbar";

export default function About() {
  return (
    <div className="about-container">
      <Navbar />
      <div className="parallax3"></div>
      <h1 className="about-title">About Us</h1>
      <div className="scroll-arrow">
        <img src="./images/arrow-down.svg" alt="Scroll Down" />
      </div>
    </div>
  );
}
