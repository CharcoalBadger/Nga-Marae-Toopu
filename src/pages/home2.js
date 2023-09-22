import React, { useEffect } from "react";
import gsap from "gsap";
import "./home2.css";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home2() {
  useEffect(() => {
    gsap.from(".circle-container", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".home2-container",
        start: "top 80%",
        end: "bottom 20%",
      },
    });
  }, []);

  const items = [
    {
      image: "./images/circle1.png",
      title: "ABOUT US",
      description:
        "Discover the heart and soul of our community, our journey, and our shared aspirations.",
      linkName: "about",
    },
    {
      image: "./images/circle2.jpg",
      title: "TIKANGA",
      description:
        "Delve into the traditions, values, and practices that guide our way of life.",
      linkName: "tikanga",
    },
    {
      image: "./images/circle3.jpg",
      title: "HUI & EVENTS",
      description:
        "Stay updated with gatherings, ceremonies, and pivotal moments in our community.",
      linkName: "hne",
    },
  ];

  return (
    <div className="home2-container">
      {items.map((item, index) => (
        <div key={index} className="circle-container">
          <div className="circle-wrapper">
            <Link to={`/${item.linkName}`}>
              <img
                className="circle-image"
                src={item.image}
                alt="circle content"
              />
            </Link>
          </div>
          <h3 className="circle-title">{item.title}</h3>
          <p className="circle-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
