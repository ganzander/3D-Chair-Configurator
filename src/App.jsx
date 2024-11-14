import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { CustomizationProvider } from "./context/customization";
import Chair from "./components/Chair";
import Configurator from "./components/Configurator";

export default function App() {
  return (
    <CustomizationProvider>
      <div className="h-screen">
        <Canvas>
          <color attach="background" args={["#101010"]} />
          <fog attach="fog" args={["#101010", 10, 20]} />
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2 - 0.5}
            maxPolarAngle={Math.PI / 2}
          />

          <mesh>
            <Chair position={[0, -1, 0]} />
          </mesh>

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={30}
              roughness={0.8}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#202020"
              metalness={0.8}
            />
          </mesh>

          <Environment preset="warehouse" background={false} intensity={1} />
          <directionalLight color="white" position={[5, 5, 5]} intensity={1} />
        </Canvas>

        <Configurator />
      </div>
    </CustomizationProvider>
  );
}
