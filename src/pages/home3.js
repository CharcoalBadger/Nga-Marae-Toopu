import React from "react";
import "./home3.css";

export default function Home3() {
  return (
    <div className="home3-container">
      <div className="parallax2"></div>
      <h1 className="home3-title">Join The Whanau</h1>
      <h2 className="home3-subtitle">Click below and join us on Facebook</h2>
      <a
        href="https://www.facebook.com/ngaamaraetoopuu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="home3-button">FOLLOW</button>
      </a>
    </div>
  );
}
