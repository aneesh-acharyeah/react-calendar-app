import React, { useState } from "react";
import "./EventModal.css";

const EventModal = ({ fullDate, events, setEvents, closeModal }) => {
  const [newEvent, setNewEvent] = useState("");

  const addEvent = () => {
    const updatedEvents = {
      ...events,
      [fullDate]: [...(events[fullDate] || []), newEvent],
    };
    setEvents(updatedEvents);
    closeModal();
  };

  return (
    <div className="modal">
      <h3>Add Event for {fullDate}</h3>
      <input
        type="text"
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
        placeholder="Event name"
      />
      <button onClick={addEvent}>Add</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default EventModal;
