import React, { useState } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "./App.css";
import MindARViewer from "./components/MindARViewer";

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className="App">
      {!started ? (
        <button
          onClick={() => {
            setStarted(true);
          }}
        >
          Start
        </button>
      ) : (
        <div className="container">
          <MindARViewer />
          <video></video>
        </div>
      )}
    </div>
  );
}

export default App;
