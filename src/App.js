import React, { useState } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "./App.css";
import MindARViewer from "./components/MindArViewer";

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className="App">
      <h1>Example React component with MindAR</h1>

      <div>
        {!started && (
          <button
            onClick={() => {
              setStarted(true);
            }}
          >
            Start
          </button>
        )}
        {started && (
          <button
            onClick={() => {
              setStarted(false);
            }}
          >
            Stop
          </button>
        )}
      </div>

      {started && (
        <div className="container">
          <MindARViewer />
          <video></video>
        </div>
      )}
    </div>
  );
}

export default App;
