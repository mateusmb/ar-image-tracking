import React, { useEffect, useRef } from "react";
import Model from "../assets/models/LOGO_GLTF.gltf";

const MindARViewer = ({ mindImage }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
      console.log("start");
    });
    return () => {
      arSystem.stop();
      console.log("stop");
    };
  }, [mindImage]);

  return (
    <a-scene
      ref={sceneRef}
      mindar-image={`imageTargetSrc: ${mindImage}; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;`}
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <a-asset-item
          id="model"
          src={Model}
        ></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model
          rotation="0 0 0 "
          position="0 0.5 0"
          scale="8 8 8"
          src="#model"
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};

export default MindARViewer;
