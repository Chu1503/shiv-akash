import React from "react";
import { useGLTF } from "@react-three/drei";

export function MB(props) {
  const { scene } = useGLTF("/models/chu-mb.glb");

  return (
    <primitive
      object={scene}
      {...props}
      dispose={null}
    />
  );
}

useGLTF.preload("/models/chu-mb.glb");
