import React, { useState } from "react";
import Calendar from "./components/Calendar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>📅 React Calendar App</h1>
      <Calendar />
    </div>
  );
};

export default App;
