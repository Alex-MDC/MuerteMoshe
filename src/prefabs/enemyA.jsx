import React, { useMemo, useEffect, useRef } from "react";
import { useBox, useCylinder } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useKeyboardC } from "@react-three/drei";
import { PlayerPosition} from "./Player";
// Constants

const speed = 300;
let x=0
let z=0




export const EnemyA = () => {
  const [enemyAref, enemyApi] = useCylinder(() => ({
    type: "Dynamic",
    position: [2,1,1],
    args: [0.5, 0.5, 0.5],
    material: {
      friction: 1,
    },
  }))
/*   const [sub, get] = PlayerPosition()

  useFrame((state, delta) => {
    const {px,pz} = get()
    console.log(px,pz);
    x += px*.5
    z += pz*.5

    enemyApi.position.set(x,0,z);
    
  }) */
  


  return   <>
  {/* <OrbitControls /> */}
  <group ref={enemyAref}>
   {/*  <PerspectiveCamera makeDefault position={[25, 11, 25]} args={[60, 2, 2, 1200]}/> */}
    <mesh castShadow receiveShadow position={[0, 2, 0]}>
      <cylinderBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"green"} />
     
      {/* <meshStandardMaterial metalness={50} /> */}
      {/* <meshStandardMaterial emissive={"red"} />
      <meshStandardMaterial emissiveIntensity={5} /> */}
    </mesh>
  </group>
  </>
}
