import React, { useEffect, useRef } from "react";
import Target from "../assets/targets/targets.mind";
import Model from "../assets/models/cc_logo.d58de42a.gltf";

const MindARViewer = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
    });
    return () => {
      arSystem.stop();
    };
  }, []);

  return (
    <a-scene
      ref={sceneRef}
      mindar-image={`imageTargetSrc: ${Target}; autoStart: false; uiLoading: yes; uiError: no; uiScanning: yes; filterMinCF: 0.00001; filterBeta: 5000; warmupTolerance: 1; missTolerance: 30;`}
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      reflection="directionalLight:#real-light"
    >
      <a-assets>
        <a-asset-item id="model" src={Model}></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model
          rotation="0 0 0 "
          position="0 0 0"
          scale="5 5 5"
          src="#model"
        ></a-gltf-model>
      </a-entity>
      <a-light
        id="real-light"
        type="directional"
        light="castShadow:true;shadowCameraAutomatic:#objects;"
        position="1 1 1"
        intensity="0.5"
      ></a-light>
    </a-scene>
  );
};

export default MindARViewer;
