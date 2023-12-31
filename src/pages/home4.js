import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./home4.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home4() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.start.toLocaleString(), // Formatting to a readable string
      end: clickInfo.event.end.toLocaleString(),
    });
    setIsModalOpen(true);
  };

  useEffect(() => {
    gsap.from(".home4-container", {
      opacity: 0,
      y: 50,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".home4-container",
        start: "top 80%",
        end: "bottom 20%",
      },
    });
  }, []);

  const generateRandomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  const eventNames = [
    "Meeting with Ngaati Whaatua",
    "Hui with Waikato-Tainui",
    "Discussion with Ngaai Tahu",
    "Strategy Session with Ngaapuhi",
    "Collaboration with Ngaati Tuuwharetoa",
    "Planning with Ngaati Maniapoto",
    "Workshop with Tuuhoe",
    "Gathering with Ngaati Porou",
    "Engagement with Rangitaane",
    "Dialogue with Ngaati Kahungunu",
    "Conference with Ngaati Toa",
    "Summit with Whakatoohea",
    "Roundtable with Ngaati Raukawa",
    "Consultation with Ngaati Awa",
    "Briefing with Te Arawa",
    "Session with Ngaati Tama",
    "Review with Ngaai Te Rangi",
    "Catch-up with Ngaati Maru",
    "Debrief with Ngaati Kuri",
    "Conclave with Ngaati Koata",
  ];

  const events = eventNames.map((name) => {
    const randomStart = generateRandomDate(new Date(), new Date(2024, 11, 31)); // Generate a random date up to the end of 2024
    const randomEnd = new Date(randomStart.getTime() + 2 * 3600 * 1000); // 2 hours duration for each event
    return {
      title: name,
      start: randomStart,
      end: randomEnd,
    };
  });

  return (
    <div className="home4-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        height="auto"
      />
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>{selectedEvent.title}</h2>
            <p>Start: {selectedEvent.start.toString()}</p>
            <p>End: {selectedEvent.end.toString()}</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
