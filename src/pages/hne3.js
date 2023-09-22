import React, { useEffect } from "react";
import "./hne3.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hne3() {
  useEffect(() => {
    gsap.from(".hne3-title", {
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".hne3-title",
        start: "top 80%",
      },
    });

    gsap.from(".event-section h2", {
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".event-section",
        start: "top 80%",
      },
    });

    gsap.from(".event-image", {
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".events-grid",
        start: "top 80%",
      },
    });
  }, []);

  const events = [
    {
      title: "The Kings Coronation",
      images: [
        "./images/hne1.jpg",
        "./images/hne2.jpg",
        "./images/hne3.jpg",
        "./images/hne4.jpg",
        "./images/hne5.jpg",
        "./images/hne6.jpg",
        "./images/hne7.jpg",
        "./images/hne8.jpg",
      ],
    },
    {
      title: "Celebration of an Education Program",
      images: [
        "./images/hne1.jpg",
        "./images/hne2.jpg",
        "./images/hne3.jpg",
        "./images/hne4.jpg",
        "./images/hne5.jpg",
        "./images/hne6.jpg",
        "./images/hne7.jpg",
        "./images/hne8.jpg",
      ],
    },
    {
      title: "Waka Ama Sprint Nationals 2023",
      images: [
        "./images/hne1.jpg",
        "./images/hne2.jpg",
        "./images/hne3.jpg",
        "./images/hne4.jpg",
        "./images/hne5.jpg",
        "./images/hne6.jpg",
        "./images/hne7.jpg",
        "./images/hne8.jpg",
      ],
    },
  ];

  return (
    <div className="hne3-container">
      <h2 className="hne3-title">Past Hui & Events</h2>
      {events.map((event, index) => (
        <div key={index} className="event-section">
          <h2>{event.title}</h2>
          <div className="events-grid">
            {event.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={` ${imgIndex + 1} for ${event.title}`}
                className="event-image"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
