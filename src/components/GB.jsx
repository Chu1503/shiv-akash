import React from "react";
import { useGLTF } from "@react-three/drei";

export function GB(props) {
  const { scene } = useGLTF("/models/chu-gb.glb");

  return (
    <primitive
      object={scene}
      {...props}
      dispose={null}
    />
  );
}

useGLTF.preload("/models/chu-gb.glb");
