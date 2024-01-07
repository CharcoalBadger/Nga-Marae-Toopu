import React, { useEffect } from "react";
import "./tikangainfo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tikangainfo() {
  useEffect(() => {
    gsap.utils
      .toArray(
        ".tikangainfo-title, .tikangainfo-text, .tikangainfo-subtitle, .tikangainfo-subpara, .tikangainfo-image, .tikangainfo-image2"
      )
      .forEach((section) => {
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
      {/* Intro Section */}
      <h2 className="tikangainfo-title">
        Welcome to the Historical Journey of Ngaa Marae Toopu
      </h2>
      <p className="tikangainfo-text">
        Ngaa Marae Toopu, an organization dedicated to the unity and prosperity
        of Marae in New Zealand, holds a rich history of collaboration,
        leadership, and community engagement. This history is encapsulated in
        the pivotal Tainui Conferences of 1976, which set the foundation for our
        ongoing journey towards unity and cultural preservation.
      </p>

      {/* First Conference Section */}
      <div className="tikangainfo-section">
        <div className="tikangainfo-content">
          <h2 className="tikangainfo-title">
            The Inaugural Tainui Conference - November 1976
          </h2>
          <p className="tikangainfo-text">
            The journey began in November 1976 at the sacred Turangawaewae
            Marae. Delegates from various Marae came together to discuss forming
            a Confederation of Marae, marking a significant gathering under the
            Kiingitanga movement.
          </p>

          {/* Subsections of First Conference */}
          <h3 className="tikangainfo-subtitle">
            Historical Context and Purpose:
          </h3>
          <p className="tikangainfo-subpara">
            This meeting was more than a gathering; it was a historic moment
            aimed at unifying the Tainui People.
          </p>

          <h3 className="tikangainfo-subtitle">
            Opening and Cultural Significance:
          </h3>
          <p className="tikangainfo-subpara">
            Reverence and inclusivity marked the opening, with a blessing
            service and welcoming words from Te Arikinui.
          </p>
          <h3 className="tikangainfo-subtitle">
            Deliberations and Discussions:
          </h3>
          <p className="tikangainfo-subpara">
            Delegates engaged in intensive discussions, sharing words of
            Mihi-Praise and expressing allegiance to the Kiingitanga movement.
          </p>
          <h3 className="tikangainfo-subtitle">Leadership and Decisions:</h3>
          <p className="tikangainfo-subpara">
            Key leadership positions were democratically elected, marking the
            formal structuring of the Confederation.
          </p>
          <h3 className="tikangainfo-subtitle">
            Continued Deliberations and Strategic Directions:
          </h3>
          <p className="tikangainfo-subpara">
            Discussions continued, focusing on the name, constitution, and
            future directions of the organization.
          </p>
          <h3 className="tikangainfo-subtitle">
            Commitment to Kingitanga and Community Engagement:
          </h3>
          <p className="tikangainfo-subpara">
            A strong emphasis was placed on allegiance and unity, encouraging
            delegates to promote these values within their Marae.
          </p>
          <h3 className="tikangainfo-subtitle">Closing and Reflections:</h3>
          <p className="tikangainfo-subpara">
            The meeting concluded with a strengthened sense of unity and
            direction, setting the stage for future gatherings and
            collaborations.
          </p>
        </div>
        <img
          src="./images/nmtminutes.jpg"
          alt="Minutes of 1976 Tainui Conference dated 6th November"
          className="tikangainfo-image"
        />
      </div>

      {/* Second Conference Section */}
      <div className="tikangainfo-section">
        <div className="tikangainfo-content">
          <h2 className="tikangainfo-title">
            Second Tainui Conference - December 1976
          </h2>
          <p className="tikangainfo-text">
            Continuing the momentum, the second conference held in December 1976
            aimed to solidify the structure and commitments made previously.
          </p>
          {/* Subsections of Second Conference */}
          <h3 className="tikangainfo-subtitle">
            Historical Context and Continuation:
          </h3>
          <p className="tikangainfo-subpara">
            This meeting was a continuation of the inaugural conference, aiming
            to further solidify the organization's structure.
          </p>
          <h3 className="tikangainfo-subtitle">
            Executive Leadership and Governance:
          </h3>
          <p className="tikangainfo-subpara">
            Leadership was reaffirmed, providing stability and maintaining
            momentum for the organization's initiatives.
          </p>
          <h3 className="tikangainfo-subtitle">
            Allegiances and Unity under Te Arikinui:
          </h3>
          <p className="tikangainfo-subpara">
            Discussions continued to emphasize unity under the leadership of Te
            Arikinui and the values of the Tainui people.
          </p>
          <h3 className="tikangainfo-subtitle">
            Management and Operational Decisions:
          </h3>
          <p className="tikangainfo-subpara">
            A significant focus was placed on democratic leadership and
            operational guidelines for the organization.
          </p>
          <h3 className="tikangainfo-subtitle">
            Financial and Strategic Planning:
          </h3>
          <p className="tikangainfo-subpara">
            Financial management was formalized, and strategic planning
            discussions set the stage for continued progress.
          </p>
          <h3 className="tikangainfo-subtitle">Closing and Reflections:</h3>
          <p className="tikangainfo-subpara">
            The meeting concluded with a collective sense of purpose and
            responsibility, with plans for the next gathering.
          </p>

          {/* Future Directions and Closing */}
          <h3 className="tikangainfo-subtitle">
            Enhancements and Future Directions
          </h3>
          <p className="tikangainfo-subpara">
            The third document, "Additional to the Agenda," outlined more
            detailed structural and operational enhancements, emphasizing a
            progression towards a more formalized and efficient organization.
          </p>
        </div>
        <img
          src="./images/nmtminutes2.jpg"
          alt="Minutes of 1976 Tainui Conference dated 18th December"
          className="tikangainfo-image2"
        />
      </div>

      {/* Closing Reflections */}
      <div className="tikangainfo-section">
        <div className="tikangainfo-content">
          <h3 className="tikangainfo-title">Our Ongoing Journey</h3>
          <p className="tikangainfo-text">
            As we reflect on these foundational conferences, we are reminded of
            the enduring spirit of unity, leadership, and commitment that drives
            Ngaa Marae Toopu. Each meeting, decision, and moment of reflection
            has contributed to the rich tapestry of our organization's history,
            guiding us on our ongoing journey towards a prosperous and unified
            future for all Marae.
          </p>
        </div>
      </div>
    </div>
  );
}
