import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home3.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home3() {
  useEffect(() => {
    gsap.from(".home3-animate", {
      opacity: 0,
      y: 50,
      ease: "power1.inOut",
      stagger: 0.2, // 0.2 seconds between each element
      scrollTrigger: {
        trigger: ".home3-container",
        start: "top 80%",
        end: "bottom 20%",
      },
    });
  }, []);

  return (
    <div className="home3-container">
      <div className="parallax2 "></div>
      <h1 className="home3-title home3-animate">Join The Whanau</h1>
      <h2 className="home3-subtitle home3-animate">
        Click below and join us on Facebook
      </h2>
      <a
        href="https://www.facebook.com/ngaamaraetoopuu"
        target="_blank"
        rel="noopener noreferrer"
        className="home3-animate"
      >
        <button className="home3-button">FOLLOW</button>
      </a>
    </div>
  );
}
