import React, { useMemo, useEffect, useRef } from "react";
import { useBox } from "@react-three/cannon";
import { useFrame, Camera } from "@react-three/fiber";
import { useKeyboardControls, PerspectiveCamera, OrbitControls } from "@react-three/drei";
// Constants

const speed = 300;
let x=0
let z=0




export const Player = () => {
  const [playerRef, playerApi] = useBox(() => ({
    type: "Dynamic",
    position: [1,2,1],
    args: [0.5, 0.5, 0.5],
    material: {
      friction: 1,
    },
  }))
  const [sub, get] = useKeyboardControls()

  useFrame((state, delta) => {
    const {forward, backward, leftward, rightward} = get()
    x += rightward ? 0.2 : leftward ? -0.2 : 0;
    z += forward   ? -0.2: backward ? +0.2 : 0;

    playerApi.position.set(x,0,z);
  })
  


  return   <>
  <OrbitControls />
  <group ref={playerRef}>
    <PerspectiveCamera makeDefault position={[25, 11, 25]} args={[60, 2, 2, 1200]}/>
    <mesh castShadow receiveShadow position={[0, 2, 0]}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  </group>
  </>
}

/* export const PlayerPosition = () => {
  x +=1
  z+=1
  return {x,z};
} */