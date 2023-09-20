import React from "react";
import About from "./about";
import Imagewithtext from "./imagewithtext";
import Footer from "./footer";

export default function Aboutapp() {
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
