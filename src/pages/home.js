import React from "react";
import "./home.css";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="parallax"></div>
      <h1 className="home-title">Ngaa Marae Toopu</h1>
      <div className="scroll-arrow">
        <img src="./images/arrow-down.svg" alt="Scroll Down" />
      </div>
    </div>
  );
}
