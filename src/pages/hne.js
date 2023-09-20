import React from "react";
import "./hne.css";
import Navbar from "./navbar";

export default function Hne() {
  return (
    <div className="hne-container">
      <Navbar />
      <div className="parallax5"></div>
      <h1 className="hne-title">Hui & Events</h1>
      <div className="scroll-arrow">
        <img src="./images/arrow-down.svg" alt="Scroll Down" />
      </div>
    </div>
  );
}
