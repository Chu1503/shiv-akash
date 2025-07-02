import React from "react";
import { useGLTF } from "@react-three/drei";

export function Head(props) {
  const { scene } = useGLTF("/models/chuhead.glb");

  return (
    <primitive
      object={scene}
      {...props}
      dispose={null}
    />
  );
}

useGLTF.preload("/models/chuhead.glb");
