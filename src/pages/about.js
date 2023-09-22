import { useEffect } from "react";
import gsap from "gsap";
import "./about.css";
import Navbarapp from "./navbarapp";

export default function About() {
  useEffect(() => {
    gsap.from(".about-title", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
    });
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".scroll-arrow", { duration: 0.8, y: -10, ease: "power1.inOut" });
  }, []);
  return (
    <div className="about-container">
      <div className="navbarapp-container">
        <Navbarapp />
      </div>
      <div className="parallax3"></div>
      <h1 className="about-title">About Us</h1>
      <div className="scroll-arrow">
        <img src="./images/arrow-down.svg" alt="Scroll Down" />
      </div>
    </div>
  );
}
