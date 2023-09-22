import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./about";
import Imagewithtext from "./imagewithtext";
import Footer from "./footer";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutapp() {
  useEffect(() => {
    const targets = document.querySelectorAll(".iwt-image");

    targets.forEach((target) => {
      const imageOnRight =
        target.getAttribute("data-image-on-right") === "true";
      const direction = imageOnRight ? 50 : -50;

      gsap.from(target, {
        duration: 1,
        x: direction,
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: target.closest(".iwt-container"),
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div className="aboutapp-container">
      <About />
      <Imagewithtext
        imageSrc="./images/iwt-1.png"
        title="BILL JAMES"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Proin euismod quam non dignissim aliquet. Ut ac rhoncus purus, sed lobortis ligula. Curabitur lacinia pharetra libero, nec eleifend ante. Pellentesque at risus in justo dictum ullamcorper. Nullam id sapien at erat tempor blandit in a nunc."
        imageOnRight={true}
      />
      <Imagewithtext
        imageSrc="./images/iwt-2.png"
        title="KIRI KANAWA"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Proin euismod quam non dignissim aliquet. Ut ac rhoncus purus, sed lobortis ligula. Curabitur lacinia pharetra libero, nec eleifend ante. Pellentesque at risus in justo dictum ullamcorper. Nullam id sapien at erat tempor blandit in a nunc."
      />
      <Imagewithtext
        imageSrc="./images/iwt-3.png"
        title="TAIKA WAITITI"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Proin euismod quam non dignissim aliquet. Ut ac rhoncus purus, sed lobortis ligula. Curabitur lacinia pharetra libero, nec eleifend ante. Pellentesque at risus in justo dictum ullamcorper. Nullam id sapien at erat tempor blandit in a nunc."
        imageOnRight={true}
      />
      <Footer />
    </div>
  );
}
