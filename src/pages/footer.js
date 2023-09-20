import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="left-section">
          <a href="/privacy-policy" className="privacy-link">
            Privacy Policy
          </a>
          <p>
            &copy; {new Date().getFullYear()} Ngaa Marae Toopu. All rights
            reserved.
          </p>
        </div>
        <div className="middle-section">
          <p>FOLLOW US</p>
          <div className="social-media">
            <a
              href="https://www.facebook.com/YourFacebookPage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/logo-facebook-white.png"
                alt="Facebook"
                className="facebook-icon"
              />
            </a>
          </div>
        </div>
        <a href="/credit" className="credit-link">
          Designed & Developed by William Douglas
        </a>
      </div>
    </div>
  );
}
