import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content footer-animate">
        <div className="left-section footer-animate">
          <a href="/privacy-policy" className="privacy-link footer-animate">
            Privacy Policy
          </a>
          <p className="footer-animate">
            &copy; {new Date().getFullYear()} Ngaa Marae Toopu. All rights
            reserved.
          </p>
        </div>
        <div className="middle-section footer-animate">
          <p className="footer-animate">FOLLOW US</p>
          <div className="social-media footer-animate">
            <a
              href="https://www.facebook.com/ngaamaraetoopuu"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-animate"
            >
              <img
                src="./images/logo-facebook-white.png"
                alt="Facebook"
                className="facebook-icon footer-animate"
              />
            </a>
          </div>
        </div>
        <a href="/credit" className="credit-link footer-animate">
          Designed & Developed by William Douglas
        </a>
      </div>
    </div>
  );
}
