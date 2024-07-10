import React from "react";
import DrumMachine from "./components/DrumMachine";

import "./App.css";

function App() {
  return (
    <>
      <h1>Drum Machine</h1>

      <div className="center-container">
        <div className="column">
          <DrumMachine />
        </div>
      </div>

      <p className="footer">Designed and Developed by: <a href="https://www.linkedin.com/in/anasmhaish/">Anas Mhaish</a></p>
    </>
  );
}

export default App;
