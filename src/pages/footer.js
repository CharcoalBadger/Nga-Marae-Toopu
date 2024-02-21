import React, { useState } from "react";
import "./footer.css";
import CreditsModal from "./creditmodal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="footer-container">
      <CreditsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
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
          <button
            className="credits-button footer-animate"
            onClick={() => setIsModalOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              padding: 0,
              font: "inherit",
              cursor: "pointer",
              outline: "inherit",
              marginBottom: "20px",
            }}
          >
            Image Credits
          </button>
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
