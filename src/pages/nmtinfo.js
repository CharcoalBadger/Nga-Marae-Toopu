import React from "react";
import "./nmtinfo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaraeRepresentative from "./maraereps";

gsap.registerPlugin(ScrollTrigger);

export default function NMTinfo() {
  // Sample data
  const maraeRepresentatives = [
    {
      maraeName: "Ngaati Hauaa",
      representatives: [
        {
          firstName: "Te Ao Marama",
          lastName: "Maaka",
          email: "maakateaomarama@gmail.com",
          marae: "Kai a te mata",
        },
      ],
    },
    {
      maraeName: "Ngaati Hauaa",
      representatives: [
        {
          firstName: "Kahurere Hilda",
          lastName: "Clarke",
          email: "bradleyhilda021951@gmail.com",
          marae: "Rukumoana",
        },
      ],
    },
    {
      maraeName: "Ngaati Hauaa",
      representatives: [
        {
          firstName: "Tumohe",
          lastName: "Clarke",
          email: "tumohe@gmail.com",
          marae: "Kai a te mata",
        },
      ],
    },

    // Add more Marae and their representatives here
  ];

  // ... rest of your useEffect and return statement

  return (
    <div className="nmtinfo-container">
      {/* Existing content... */}

      <h2 className="nmtinfo-title">Marae Representatives</h2>

      <div className="marae-reps-container">
        {" "}
        {/* New Container for Representatives */}
        {maraeRepresentatives.map((marae, index) => (
          <MaraeRepresentative
            key={index}
            maraeName={marae.maraeName}
            representatives={marae.representatives}
          />
        ))}
      </div>
    </div>
  );
}
