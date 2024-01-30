import { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  useEffect(() => {
    gsap.from(".navbar-logo", {
      duration: 1.5,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from(".navbar-links a", {
      duration: 1,
      opacity: 0,
      x: 50,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="./images/nmt-logo-white-ph.png"
          alt="Logo"
          className="navbar-logo"
        />
      </Link>
      <div className="navbar-links">
        <Link to="/about" className="navbar-item">
          <div className="navbar-item-text">
            About Us
            <hr className="navbar-item-divider" />
            <span className="navbar-item-subtext">Whakahaere</span>
          </div>
        </Link>
        <Link to="/tikanga" className="navbar-item">
          <div className="navbar-item-text">
            History
            <hr className="navbar-item-divider" />
            <span className="navbar-item-subtext">Hitori</span>
          </div>
        </Link>
        <Link to="/hne" className="navbar-item">
          <div className="navbar-item-text">
            Events
            <hr className="navbar-item-divider" />
            <span className="navbar-item-subtext">Hui</span>
          </div>
        </Link>
        <Link to="/nmt" className="navbar-item">
          <div className="navbar-item-text">
            Marae Representatives
            <hr className="navbar-item-divider" />
            <span className="navbar-item-subtext">Ngaa Toopu Marae</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
