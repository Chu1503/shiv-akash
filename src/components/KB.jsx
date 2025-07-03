import React from "react";
import { useGLTF } from "@react-three/drei";

export function KB(props) {
  const { scene } = useGLTF("/models/chu-kb.glb");

  return (
    <primitive
      object={scene}
      {...props}
      dispose={null}
    />
  );
}

useGLTF.preload("/models/chu-kb.glb");
