import React, { useState, useEffect } from "react";
import Day from "./Day";
import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || {}
  );

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayIndex = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const changeMonth = (offset) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + offset,
      1
    );
    setCurrentDate(newDate);
  };

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => changeMonth(-1)}>⬅️</button>
        <h2>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={() => changeMonth(1)}>➡️</button>
      </div>
      <div className="grid">
        {Array.from({ length: firstDayIndex }).map((_, i) => (
          <div key={`empty-${i}`} className="empty"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, day) => (
          <Day
            key={day + 1}
            date={day + 1}
            month={currentDate.getMonth()}
            year={currentDate.getFullYear()}
            events={events}
            setEvents={setEvents}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
