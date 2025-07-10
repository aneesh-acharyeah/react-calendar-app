import React, { useState } from "react";
import "./EventModal.css";

const EventModal = ({ fullDate, events, setEvents, closeModal }) => {
  const [newEvent, setNewEvent] = useState("");

  const addEvent = () => {
    if (newEvent.trim() === "") return; // prevent empty events
    const updatedEvents = {
      ...events,
      [fullDate]: [...(events[fullDate] || []), newEvent.trim()],
    };
    setEvents(updatedEvents);
    setNewEvent(""); // clear input
    closeModal();
  };

  const handleCancel = () => {
    setNewEvent(""); // clear input
    closeModal();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addEvent(); // allow Enter key to submit
  };

  return (
    <div className="modal" onClick={handleCancel}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent modal close on content click
      >
        <h3>Add Event for {fullDate}</h3>
        <input
          type="text"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
          placeholder="Event name"
          onKeyPress={handleKeyPress}
        />
        <div className="modal-buttons">
          <button onClick={addEvent}>Add</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
