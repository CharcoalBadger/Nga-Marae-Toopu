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
        <img src="./images/nmt-logo.png" alt="Logo" className="navbar-logo" />
      </Link>
      <div className="navbar-links">
        <Link to="/about">About Us</Link>
        <Link to="/tikanga">Tikanga</Link>
        <Link to="/hne">Hui & Events</Link>
      </div>
    </div>
  );
}
