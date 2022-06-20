import React from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "aframe-extras";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "./App.css";
import Compiler from "./components/Compiler";

function App() {
  return (
    <div className="App">
      <h1>Image Tracking</h1>
      <Compiler />
    </div>
  );
}

export default App;
