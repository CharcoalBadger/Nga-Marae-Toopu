import { useEffect } from "react";
import gsap from "gsap";
import "./hne.css";
import Navbarapp from "./navbarapp";

export default function Hne() {
  useEffect(() => {
    gsap.from(".hne-title-container", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
    });
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".scroll-arrow", { duration: 0.8, y: -10, ease: "power1.inOut" });
  }, []);
  return (
    <div className="hne-container">
      <div className="navbarapp-container">
        <Navbarapp />
      </div>
      <div className="parallax5"></div>
      <div className="hne-title-container">
        <h1 className="hne-title">Events</h1>
        <hr className="hne-title-divider" />
        <h1 className="hne-title-subtext">Hui</h1>
      </div>
      <div className="scroll-arrow">
        <img src="./images/arrow-down.svg" alt="Scroll Down" />
      </div>
    </div>
  );
}
