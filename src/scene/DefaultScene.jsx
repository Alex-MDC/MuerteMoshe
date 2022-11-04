import React, { useEffect, useRef } from "react"
import { Physics } from "@react-three/cannon"
import { useThree } from "@react-three/fiber"
import { Canvas } from "@react-three/fiber"
import {KeyboardControls } from "@react-three/drei";

import { Plane } from "../prefabs/Plane";
import { Skybox } from "../prefabs/Skybox";
import { Player } from "../prefabs/Player";
import { EnemyA } from "../prefabs/enemyA";


export const DefaultScene = () => {
  
  return <>
  <Canvas>
    <directionalLight position={[3, 0, 3]} intensity={0.5} castShadow />
    <pointLight position={[0, 0, -3]} intensity={0.6} castShadow />
    <pointLight position={[0, 0, 4]} intensity={0.6} castShadow />
    <ambientLight intensity={0.6} />
    <Physics
    gravity={[0, -9, 0]}
    tolerance={0}
    iterations={50}
    broadphase={"SAP"}
    >
      
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'leftward', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'rightward', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] },
      ]}>
      <Player/>
    </KeyboardControls>
   <EnemyA/>

    <spotLight position={[10, 10, 10]} />
    <ambientLight intensity={1} />
    <Plane />
    </Physics>
  </Canvas>
  </>
}
