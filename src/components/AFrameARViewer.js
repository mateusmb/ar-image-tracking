import React from "react";
import { Scene, Entity } from "react-aframe-ar/dist/core";
import Marker from "../assets/targets/marker.patt";
import Model from "../assets/models/cc_logo.d58de42a.gltf";

const AFrameARViewer = () => {
  return (
    <Scene
      vr-mode-ui="enabled: false;"
      loading-screen="enabled: false;"
      renderer="logarithmicDepthBuffer: true;"
      arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      id="scene"
      embedded
    >
      <a-assets>
        <a-asset-item
          id="animated-asset"
          src={Model}
        ></a-asset-item>
      </a-assets>
      <a-marker
        id="animated-marker"
        type="pattern"
        preset="custom"
        url={Marker}
        raycaster="objects: .clickable"
        emitevents="true"
        cursor="fuse: false; rayOrigin: mouse;"
      >
        <Entity
          id="bowser-model"
          scale="8 8 8"
          rotation="270 0 0"
          animation-mixer="loop: repeat"
          gltf-model="#animated-asset"
          class="clickable"
          gesture-handler
        ></Entity>
      </a-marker>

      <a-entity camera></a-entity>
    </Scene>
  );
};

export default AFrameARViewer;
