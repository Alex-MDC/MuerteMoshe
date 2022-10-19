import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { useControls } from './utils/useControls'
import { OrbitControls } from '@react-three/drei'
//blender model imports
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {Model} from './models/wolf_model.js'

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
  )
}

function Cube(props) {
  const [velocity, setVelocity] = useState(0.2)
  const [ref] = useBox(() => ({ mass: 1, ...props }))
  const controls = useControls()
  const postions = useRef();


  useFrame(() => {
    const { forward, backward, left, right } = controls.current
    if(forward) postions.current.position.x+=.1;
    if(backward) postions.current.position.x-=.1;
    if(left) postions.current.position.z-=.1;
    if(right) postions.current.position.z+=.1;
  });
  
  return (
    <mesh ref={postions}>
      <mesh castShadow ref={ref} >
        <boxGeometry />
        <meshStandardMaterial color="orange" />
        <OrbitControls />
      </mesh>
    </mesh>
  )
}


export default function App() {

  return (
    <Canvas dpr={[1, 2]} shadows camera={{ position: [-5, 5, 5], fov: 50 }}>
      <ambientLight />
      <spotLight angle={0.25} penumbra={0.5} position={[10, 10, 5]} castShadow />
      <Physics>
        <Plane />
        <Model/>
        <Cube position={[0, 4, 0]} />
      </Physics>
      
    </Canvas>
  )
}