import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { MB } from "./MB";

const ChuMB = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 45], fov: 30 }} className="!w-full !h-full">
      <directionalLight intensity={5} position={[0, 0, 10]} color="#fff" />

      {/* <directionalLight
        intensity={10}
        position={[5, 10, 5]}
        color="#B41600"
        castShadow
        shadow-bias={-0.0001}
      />

      <directionalLight
        intensity={7}
        position={[-5, 10, 5]}
        color="#2CD2C0"
        castShadow
        shadow-bias={-0.0001}
      /> */}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={3}
        minDistance={1.5}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.9}
      />

      <MB scale={5} rotation={[0.1, 0, 0]} position={[0, -0.1, 0]}/>
    </Canvas>
  );
};

export default ChuMB;
