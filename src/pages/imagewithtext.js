import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./imagewithtext.css";

gsap.registerPlugin(ScrollTrigger);

export default function Imagewithtext({
  imageSrc,
  title,
  description,
  imageOnRight = false,
}) {
  return (
    <div className={`iwt-container ${imageOnRight ? "image-right" : ""}`}>
      <img
        src={imageSrc}
        alt="Descriptive alt text"
        className="iwt-image"
        data-image-on-right={imageOnRight}
      />
      <div className="iwt-text-content">
        <h2 className="iwt-title">{title}</h2>
        <p className="iwt-description">{description}</p>
      </div>
    </div>
  );
}
