import React from "react";
import "./tikanga.css";
import Navbar from "./navbar";

export default function Tikanga() {
  return (
    <div className="tikanga-container">
      <Navbar />
      <div className="parallax4"></div>
      <h1 className="tikanga-title">Tikanga</h1>
      <div className="scroll-arrow">
        <img src="./images/arrow-down.svg" alt="Scroll Down" />
      </div>
    </div>
  );
}
