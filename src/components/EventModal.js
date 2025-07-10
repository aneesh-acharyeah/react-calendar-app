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
      <div className="modal-content">
        <h3>Add Event for {fullDate}</h3>
        <input
          type="text"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
          placeholder="Event name"
        />
        <div className="modal-buttons">
          <button onClick={addEvent}>Add</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
