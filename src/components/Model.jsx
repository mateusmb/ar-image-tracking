import React from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from "@react-three/fiber";
import CCLogo from "../assets/models/cc_logo.d58de42a.gltf";

const Model = () => {
  const { scene } = useLoader(GLTFLoader, CCLogo);

  return (
    <mesh>
      <primitive
        object={scene}
        dispose={null}
        position={[0, -0.5, 0]}
        scale={[20, 20, 20]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

export default Model;
