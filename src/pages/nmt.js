import { useEffect } from "react";
import gsap from "gsap";
import "./nmt.css";
import Navbarapp from "./navbarapp";

export default function NMT() {
  useEffect(() => {
    gsap.from(".nmt-title-container", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
    });
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".scroll-arrow", { duration: 0.8, y: -10, ease: "power1.inOut" });
  }, []);
  return (
    <div className="nmt-container">
      <div className="navbarapp-container">
        <Navbarapp />
      </div>
      <div className="parallax6"></div>
      <div className="nmt-title-container">
        <h1 className="nmt-title-subtext">Ngaa Toopu Kaumaatua</h1>
        <hr className="nmt-title-divider" />
      </div>
      <div className="scroll-arrow">
        <img src="./images/arrow-down.svg" alt="Scroll Down" />
      </div>
    </div>
  );
}
