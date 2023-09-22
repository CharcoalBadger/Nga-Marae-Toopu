import React, { useEffect } from "react";
import "./tikangainfo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tikangainfo() {
  useEffect(() => {
    gsap.utils
      .toArray(
        ".tikangainfo-title1, .tikangainfo-para1, .tikangainfo-title2, .tikangainfo-para2, .tikangainfo-title3, .tikangainfo-para3"
      )
      .forEach((section, index) => {
        gsap.from(section, {
          duration: 1,
          y: 50,
          opacity: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
          },
        });
      });
  }, []);

  return (
    <div className="tikangainfo-container">
      <h2 className="tikangainfo-title1">What is Tikanga?</h2>
      <p className="tikangainfo-para1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum. Donec in efficitur leo. Proin euismod quam non
        dignissim aliquet. Ut ac rhoncus purus, sed lobortis ligula. Curabitur
        lacinia pharetra libero, nec eleifend ante. Pellentesque at risus in
        justo dictum ullamcorper. Nullam id sapien at erat tempor blandit in a
        nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        lacinia odio vitae vestibulum. Donec in efficitur leo. Proin euismod
        quam non dignissim aliquet. Ut ac rhoncus purus, sed lobortis ligula.
        Curabitur lacinia pharetra libero, nec eleifend ante. Pellentesque at
        risus in justo dictum ullamcorper. Nullam id sapien at erat tempor
        blandit in a nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo.
        Proin euismod quam non dignissim aliquet. Ut ac rhoncus purus, sed
        lobortis ligula. Curabitur lacinia pharetra libero, nec eleifend ante.
        Pellentesque at risus in justo dictum ullamcorper. Nullam id sapien at
        erat tempor blandit in a nunc.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in
        efficitur leo. Proin euismod quam non dignissim aliquet. Ut ac rhoncus
        purus, sed lobortis ligula. Curabitur lacinia pharetra libero, nec
        eleifend ante. Pellentesque at risus in justo dictum ullamcorper. Nullam
        id sapien at erat tempor blandit in a nunc.
      </p>
      <h2 className="tikangainfo-title2">Historical Overview</h2>
      <p className="tikangainfo-para2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum. Donec in efficitur leo. Proin euismod quam non
        dignissim aliquet. Ut ac rhoncus purus, sed lobortis ligula. Curabitur
        lacinia pharetra libero, nec eleifend ante. Pellentesque at risus in
        justo dictum ullamcorper. Nullam id sapien at erat tempor blandit in a
        nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        lacinia odio vitae vestibulum. Donec in efficitur leo. Proin euismod
        quam non dignissim aliquet. Ut ac rhoncus purus, sed lobortis ligula.
        Curabitur lacinia pharetra libero, nec eleifend ante. Pellentesque at
        risus in justo dictum ullamcorper. Nullam id sapien at erat tempor
        blandit in a nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo.
        Proin euismod quam non dignissim aliquet. Ut ac rhoncus purus, sed
        lobortis ligula. Curabitur lacinia pharetra libero, nec eleifend ante.
        Pellentesque at risus in justo dictum ullamcorper. Nullam id sapien at
        erat tempor blandit in a nunc.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in
        efficitur leo. Proin euismod quam non dignissim aliquet. Ut ac rhoncus
        purus, sed lobortis ligula. Curabitur lacinia pharetra libero, nec
        eleifend ante. Pellentesque at risus in justo dictum ullamcorper. Nullam
        id sapien at erat tempor blandit in a nunc.
      </p>
      <h2 className="tikangainfo-title3">Core Principles</h2>
      <p className="tikangainfo-para3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum. Donec in efficitur leo. Proin euismod quam non
        dignissim aliquet. Ut ac rhoncus purus, sed lobortis ligula. Curabitur
        lacinia pharetra libero, nec eleifend ante. Pellentesque at risus in
        justo dictum ullamcorper. Nullam id sapien at erat tempor blandit in a
        nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        lacinia odio vitae vestibulum. Donec in efficitur leo. Proin euismod
        quam non dignissim aliquet. Ut ac rhoncus purus, sed lobortis ligula.
        Curabitur lacinia pharetra libero, nec eleifend ante. Pellentesque at
        risus in justo dictum ullamcorper. Nullam id sapien at erat tempor
        blandit in a nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo.
        Proin euismod quam non dignissim aliquet. Ut ac rhoncus purus, sed
        lobortis ligula. Curabitur lacinia pharetra libero, nec eleifend ante.
        Pellentesque at risus in justo dictum ullamcorper. Nullam id sapien at
        erat tempor blandit in a nunc.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in
        efficitur leo. Proin euismod quam non dignissim aliquet. Ut ac rhoncus
        purus, sed lobortis ligula. Curabitur lacinia pharetra libero, nec
        eleifend ante. Pellentesque at risus in justo dictum ullamcorper. Nullam
        id sapien at erat tempor blandit in a nunc.
      </p>
    </div>
  );
}
