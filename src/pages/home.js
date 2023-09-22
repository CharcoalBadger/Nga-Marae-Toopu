import { useEffect } from "react";
import "./home.css";
import Navbar from "./navbar";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.from(".home-title", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
    });
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".scroll-arrow", { duration: 0.8, y: -10, ease: "power1.inOut" });
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="parallax"></div>
      <h1 className="home-title">Ngaa Marae Toopu</h1>
      <div className="scroll-arrow">
        <img src="./images/arrow-down.svg" alt="Scroll Down" />
      </div>
    </div>
  );
}
