import React, { useState, Suspense } from "react";
import {
  ZapparCamera,
  ImageTracker,
  ZapparCanvas,
  BrowserCompatibility,
} from "@zappar/zappar-react-three-fiber";
import targetFile from "./assets/targets/target.zpt";
import Model from "./components/Model";

function App() {
  const [visibleState, setVisibleState] = useState(false);

  return (
    <>
      <BrowserCompatibility />
      <ZapparCanvas gl={{ antialias: true }}>
        <ZapparCamera />
        <Suspense fallback={null}>
          <ImageTracker
            onNotVisible={() => {
              setVisibleState(false);
            }}
            onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
            onVisible={() => {
              setVisibleState(true);
            }}
            targetImage={targetFile}
            visible={visibleState}
          >
            <Model />
          </ImageTracker>
        </Suspense>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} castShadow />
      </ZapparCanvas>
    </>
  );
}

export default App;
