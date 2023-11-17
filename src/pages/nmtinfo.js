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
      maraeName: "Marae A",
      representatives: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ],
    },
    {
      maraeName: "Marae b",
      representatives: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ],
    },
    {
      maraeName: "Marae c",
      representatives: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ],
    },
    {
      maraeName: "Marae c",
      representatives: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ],
    },
    {
      maraeName: "Marae c",
      representatives: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ],
    },
    {
      maraeName: "Marae c",
      representatives: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ],
    },
    {
      maraeName: "Marae c",
      representatives: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ],
    },
    {
      maraeName: "Marae c",
      representatives: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ],
    },
    {
      maraeName: "Marae c",
      representatives: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ],
    },
    {
      maraeName: "Marae c",
      representatives: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
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
