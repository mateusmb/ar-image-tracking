import React, { useState } from "react";
import MindARViewer from "./MindARViewer";
import StaticModel from "../assets/models/LOGO_GLTF.gltf";
import AnimatedModel from "../assets/models/Logo_animado.glb";

const Compiler = () => {
  const [mindImage, setMindImage] = useState(null);
  const [model, setModel] = useState(null);
  const compiler = new window.MINDAR.IMAGE.Compiler();

  const loadImage = async (file) => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const compileFiles = async (files) => {
    const images = [];
    for (let i = 0; i < files.length; i++) {
      images.push(await loadImage(files[i]));
    }
    let _start = new Date().getTime();
    await compiler.compileImageTargets(images, (progress) => {
      document.getElementById("progress").innerHTML =
        "progress: " + progress.toFixed(2) + "%";
    });
    console.log("exec time compile: ", new Date().getTime() - _start);

    const exportedBuffer = await compiler.exportData();

    const blob = new Blob([exportedBuffer]);
    const url = URL.createObjectURL(blob, { type: "application/octet-binary" });

    setMindImage(url);
  };

  const handleSelectImage = (e) => {
    if (e.target && e.target.files[0]) {
      const files = e.target.files;
      if (files.length === 0) return;
      compileFiles(files);
    }
  };
  return (
    <>
      <span id="progress"></span>
      <div id="dropzone" className="dropzone"></div>
      <input
        type="file"
        id="input"
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleSelectImage}
      />
      {mindImage && (
        <>
          <div className="container">
            <button onClick={() => setModel(StaticModel)}>Modelo estático</button>
            <button onClick={() => setModel(AnimatedModel)}>Modelo animado</button>
          </div>
        </>
      )}
      {model && (
        <>
        <div className="container">
          <MindARViewer mindImage={mindImage} model={model} />
        </div>
      </>
      )}
    </>
  );
};

export default Compiler;
