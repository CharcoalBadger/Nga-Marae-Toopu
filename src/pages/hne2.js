import React, { useEffect, useState } from "react";
import "./hne2.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

gsap.registerPlugin(ScrollTrigger);

export default function Hne2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.start ? clickInfo.event.start.toDateString() : "",
      end: clickInfo.event.end ? clickInfo.event.end.toDateString() : "",
    });
    setIsModalOpen(true);
  };

  useEffect(() => {
    gsap.from(".hne2-title", {
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".hne2-title",
        start: "top 90%",
      },
    });
  }, []);

  const events = [
    { title: "Hui aa Motu", start: "2024-01-20", allDay: true },
    { title: "Ratana Celebration", start: "2024-01-23", end: "2024-01-25" }, // Multi-day event
    { title: "Waitangi Celebration", start: "2024-02-06", allDay: true },
    {
      title: "Ngaa Marae Toopu General Meeting",
      start: "2024-02-17",
      allDay: true,
    },
    {
      title: "Ngaa Marae Toopu General Meeting",
      start: "2024-04-20",
      allDay: true,
    },
    {
      title: "Ngaa Marae Toopu General Meeting",
      start: "2024-06-15",
      allDay: true,
    },
    {
      title: "Ngaa Marae Toopu General Meeting",
      start: "2024-08-10",
      allDay: true,
    },
    {
      title: "Ngaa Marae Toopu General Meeting",
      start: "2024-10-05",
      allDay: true,
    },
    {
      title: "Ngaa Marae Toopu Christmas Function",
      start: "2024-12-14",
      allDay: true,
    },
    { title: "Horahora Poukai", start: "2024-01-01", allDay: true },
    { title: "Kokohinau Poukai", start: "2024-01-14", allDay: true },
    { title: "Taniwha Poukai", start: "2024-02-03", allDay: true },
    { title: "Hukanui Poukai", start: "2024-02-10", allDay: true },
    { title: "Maurea Poukai", start: "2024-02-24", allDay: true },
    { title: "Poutu Poukai", start: "2024-03-02", allDay: true },
    { title: "Paraawera Poukai", start: "2024-03-09", allDay: true },
    { title: "Aotearoa Poukai", start: "2024-03-10", allDay: true },
    { title: "Raakaunui Poukai", start: "2024-03-11", allDay: true },
    { title: "Waipapa Poukai", start: "2024-03-12", allDay: true },
    { title: "Maketu Poukai", start: "2024-03-13", allDay: true },
    { title: "Ookapu Poukai", start: "2024-03-14", allDay: true },
    { title: "Regatta Celebrations", start: "2024-03-16", allDay: true },
    { title: "Tuurangawaewae Poukai", start: "2024-03-18", allDay: true },
    { title: "Mirumiru Poukai", start: "2024-03-30", allDay: true },
    { title: "Te Kuiti Paa Poukai", start: "2024-03-31", allDay: true },
    { title: "Huria Poukai", start: "2024-04-06", allDay: true },
    { title: "Te Papa-o-rotu Poukai", start: "2024-04-10", allDay: true },
    { title: "Ngaati Pikiao Poukai", start: "2024-05-23", allDay: true },
    { title: "Maungatautari Kohi Kapa", start: "2024-06-01", allDay: true },
    { title: "Poohara Poukai", start: "2024-06-16", allDay: true },
    { title: "Mootakotako Kohi Kapa", start: "2024-07-01", allDay: true },
    { title: "Koroneihana", start: "2024-08-15", end: "2024-08-21" }, // Multi-day event
    { title: "Whaataapaka Poukai", start: "2024-08-31", allDay: true },
    { title: "Tauranganui Poukai", start: "2024-09-15", allDay: true },
    { title: "Waahi Poukai", start: "2024-10-08", allDay: true },
    { title: "Mangatangi Poukai", start: "2024-10-12", allDay: true },
    { title: "Pikitu Poukai", start: "2024-11-09", allDay: true },
    { title: "Te Awaamarahi Poukai", start: "2024-11-24", allDay: true },
    { title: "Waikare Poukai", start: "2024-12-07", allDay: true },
    { title: "Reretewhioi Poukai", start: "2024-12-08", allDay: true },
  ];

  return (
    <div className="hne2-container">
      <h2 className="hne2-title">Upcoming Hui & Events</h2>
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
            <p>Start: {selectedEvent.start}</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
