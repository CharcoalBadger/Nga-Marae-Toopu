import React from "react";
import "./hne2.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function Hne2() {
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
    <div className="hne2-container">
      <h2 className="hne2-title">Upcoming Hui & Events</h2>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        views={["month", "week", "day", "agenda"]}
        events={events}
        onSelectEvent={handleEventClick}
        style={{ height: "500px", width: "100%" }}
      />
    </div>
  );
}
