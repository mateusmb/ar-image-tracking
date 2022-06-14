import React, { useEffect, useRef } from "react";
import Target from "../assets/targets/targets.mind";
import Card from "../assets/images/target_codecoast.jpeg";
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
      mindar-image={`imageTargetSrc: ${Target}; autoStart: false; uiLoading: yes; uiError: no; uiScanning: yes; filterMinCF: 0.0005; filterBeta: 2000; warmupTolerance: 2; missTolerance: 20;`}
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <img
          id="card"
          src={Card}
          alt="card"
        />
        <a-asset-item
          id="avatarModel"
          src={Model}
        ></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane
          src="#card"
          position="0 0 0"
          height="0.552"
          width="1"
          rotation="0 0 0"
        ></a-plane>
        <a-gltf-model
          rotation="0 0 0 "
          position="0 -0.5 0.1"
          scale="20 20 20"
          src="#avatarModel"
        ></a-gltf-model>
      </a-entity>
    </a-scene>
  );
};

export default MindARViewer;
