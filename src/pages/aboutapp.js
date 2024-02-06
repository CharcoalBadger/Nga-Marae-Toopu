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
        imageSrc="./images/tepapi3.png"
        title="Chairperson Te Papi Cunningham"
        description="Te Papi Cunningham, our esteemed Chairperson, embodies the spirit and determination that are at the heart of Ngaa Marae Toopu. With his visionary leadership, Te Papi has been a driving force in uniting Marae across our region. His extensive background in community engagement and cultural preservation has been pivotal in shaping our organization's direction and impact. Te Papi's commitment to our heritage and his innovative approach to collaboration make him a true beacon for our community."
        imageOnRight={true}
      />
      <Imagewithtext
        imageSrc="./images/herewini.jpg"
        title="Deputy Chairperson Herewini Moana"
        description="Herewini Moana, serving as our Deputy Chairperson, is a pillar of strength and wisdom within Ngaa Marae Toopu. Herewini's role is crucial in supporting our Chairperson and overseeing key initiatives that drive our mission forward. His profound understanding of our traditions, combined with a forward-thinking mindset, ensures that our organization remains both grounded and progressive. Herewini is a champion of inclusivity, ensuring that every Marae's voice is heard and valued."
      />
      <Imagewithtext
        imageSrc="./images/marise2.jpg"
        title="Secretary Marise Bishop"
        description="Marise Bishop, our Secretary, is not only the organizational powerhouse behind Ngaa Marae Toopu but also a key facilitator of our external relationships. Her exceptional skills in administration and communication are vital in keeping our operations streamlined and effective. Beyond managing records and coordinating meetings, Marise plays an instrumental role in networking with Iwi leaders, other decision-makers, and external organizations. She ensures that the activities and decisions of Ngaa Marae Toopu are consistently aligned with the broader community’s needs and aspirations. Her commitment to our community's values is evident in her ability to bridge connections, foster collaborations, and maintain the unity of purpose that is central to our mission."
        imageOnRight={true}
      />
      <Imagewithtext
        imageSrc="./images/lillian3.jpg"
        title="Treasurer Lillian Pompey Paki"
        description="Lillian Pompey Paki, our Treasurer, brings exceptional financial acumen and a deep commitment to the sustainable growth of Ngaa Marae Toopu. Her expertise in financial management is central to our organization's ability to thrive and support our Marae effectively. Lillian’s approach to financial stewardship is marked by transparency, strategic planning, and a keen focus on the long-term goals of our community. Her dedication goes beyond financial oversight, reflecting a genuine passion for the well-being and success of our Marae."
      />
      {/* <Imagewithtext
        imageSrc="./images/placeholder.png"
        title="Assistant Treasurer Ana Haenga"
        description="Ana Haenga serves as our Assistant Treasurer, playing a vital role in managing and safeguarding our organization's financial resources. Ana's skill set in financial operations and her keen analytical abilities are indispensable to our team. Working in tandem with the Treasurer, she ensures that our financial strategies are robust and effective. Ana's meticulous attention to detail and her dedication to fiscal responsibility make her an invaluable asset to Ngaa Marae Toopu."
        imageOnRight={true}
      /> */}
      <Footer />
    </div>
  );
}
