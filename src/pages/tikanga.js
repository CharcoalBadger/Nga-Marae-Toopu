import { useEffect } from "react";
import gsap from "gsap";
import "./tikanga.css";
import Navbarapp from "./navbarapp";

export default function Tikanga() {
  useEffect(() => {
    gsap.from(".tikanga-title-container", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
    });
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".scroll-arrow", { duration: 0.8, y: -10, ease: "power1.inOut" });
  }, []);
  return (
    <div className="tikanga-container">
      <div className="navbarapp-container">
        <Navbarapp />
      </div>
      <div className="parallax4"></div>
      <div className="tikanga-title-container">
        <h1 className="tikanga-title">History</h1>
        <hr className="tikanga-title-divider" />
        <h1 className="tikanga-title-subtext">Hitori</h1>
      </div>
      <div className="scroll-arrow">
        <img src="./images/arrow-down.svg" alt="Scroll Down" />
      </div>
    </div>
  );
}
