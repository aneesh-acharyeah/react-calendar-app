import React, { useState } from "react";
import EventModal from "./EventModal";
import "./Day.css";

const Day = ({ date, month, year, events, setEvents }) => {
  const [showModal, setShowModal] = useState(false);
  const fullDate = `${year}-${month + 1}-${date}`;

  const dayEvents = events[fullDate] || [];

  return (
    <div className="day" onClick={() => setShowModal(true)}>
      <p>{date}</p>
      {dayEvents.map((event, i) => (
        <span key={i} className="event">
          {event}
        </span>
      ))}
      {showModal && (
        <EventModal
          fullDate={fullDate}
          events={events}
          setEvents={setEvents}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Day;
