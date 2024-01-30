import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content footer-animate">
        <div className="left-section footer-animate">
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-link footer-animate"
          >
            Privacy Policy
          </a>
          <a
            href="/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="cookie-link footer-animate"
          >
            Cookie Policy
          </a>
          <p className="copyright-link footer-animate">
            &copy; {new Date().getFullYear()} Ngaa Marae Toopu. All rights
            reserved.
          </p>
        </div>
        <div className="middle-section footer-animate">
          <p className="footer-animate">FOLLOW US</p>
          <div className="social-media footer-animate">
            <a
              href="https://www.facebook.com/NgaaMaraeToopu"
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
        <div className="right-section footer-animate">
          <a
            href="/accessibility-statement"
            target="_blank"
            rel="noopener noreferrer"
            className="access-link footer-animate"
          >
            Accessibility Statement
          </a>
          <a
            href="/disclaimer"
            target="_blank"
            rel="noopener noreferrer"
            className="disclaimer-link footer-animate"
          >
            Disclaimer
          </a>
          <a
            href="https://williamdouglasportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="credit-link footer-animate"
          >
            Designed & Developed by William Douglas
          </a>
        </div>
      </div>
    </div>
  );
}
