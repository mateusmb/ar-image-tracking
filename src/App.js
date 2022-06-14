import React from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "./App.css";
import MindARViewer from "./components/MindArViewer";
import Compiler from "./components/Compiler";

function App() {
  // const [started, setStarted] = useState(false);
  return (
    <div className="App">
      <h1>Example React component with MindAR</h1>
      <Compiler />
    </div>
  );
}

export default App;
