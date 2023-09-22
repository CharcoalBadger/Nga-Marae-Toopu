import { useEffect } from "react";
import gsap from "gsap";
import "./tikanga.css";
import Navbar from "./navbar";

export default function Tikanga() {
  useEffect(() => {
    gsap.from(".tikanga-title", {
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
      <Navbar />
      <div className="parallax4"></div>
      <h1 className="tikanga-title">Tikanga</h1>
      <div className="scroll-arrow">
        <img src="./images/arrow-down.svg" alt="Scroll Down" />
      </div>
    </div>
  );
}
