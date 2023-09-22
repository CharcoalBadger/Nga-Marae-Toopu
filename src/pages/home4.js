import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home4.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

gsap.registerPlugin(ScrollTrigger);

const localizer = momentLocalizer(moment);

export default function Home4() {
  const [defaultView, setDefaultView] = useState(
    window.innerWidth <= 767 ? "day" : "week"
  );
  const calendarHeight = window.innerWidth <= 767 ? "50vh" : "50vh";

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

    const handleResize = () => {
      setDefaultView(window.innerWidth <= 767 ? "day" : "week");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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

  const events = Array.from({ length: 20 }).map(() => {
    const randomDate = generateRandomDate(new Date(), new Date("2023-12-31"));
    const randomEventName =
      eventNames[Math.floor(Math.random() * eventNames.length)];
    return {
      start: randomDate,
      end: new Date(moment(randomDate).add(1, "days")),
      title: randomEventName,
    };
  });

  const handleEventClick = (event) => {
    alert(`Event: ${event.title}\nStart: ${event.start}\nEnd: ${event.end}`);
  };

  return (
    <div className="home4-container">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView={defaultView}
        views={["week", "day"]}
        events={events}
        onSelectEvent={handleEventClick}
        style={{ height: calendarHeight, width: "80%" }}
      />
    </div>
  );
}
