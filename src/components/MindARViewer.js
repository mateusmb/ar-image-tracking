import React, { useEffect, useRef } from "react";
import Model from "../assets/models/LOGO_GLTF.gltf";
import AnimatedModel from "../assets/models/Logo_animado.glb";

const MindARViewer = ({ mindImage, model }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
      console.log("start");
      console.log(model);
    });
    return () => {
      arSystem.stop();
      console.log("stop");
    };
  }, [mindImage, model]);

  return (
    <a-scene
      ref={sceneRef}
      mindar-image={`imageTargetSrc: ${mindImage}; autoStart: false; uiLoading: yes; uiError: yes; uiScanning: yes;`}
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <a-asset-item
          id="model"
          src={model}
        ></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model
          rotation="0 0 0 "
          position="0 0 0"
          scale="15 15 15"
          src="#model"
          animation-mixer="clip: *;"
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};

export default MindARViewer;
