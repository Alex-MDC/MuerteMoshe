import React from "react"
import { usePlane } from "@react-three/cannon"

export const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.25, 0],
    material: {
      friction: 0.1
    }
  }))
  return <>
  <mesh ref={ref} rotation={[-Math.PI * 0.5, 0, 0]} castShadow receiveShadow>
  <planeBufferGeometry args={[40, 40]} />
  <meshStandardMaterial color={"grey"} />
  </mesh>
  </>
};
