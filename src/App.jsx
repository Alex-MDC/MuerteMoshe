import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { useControls } from './utils/useControls'

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
  const [ref] = useBox(() => ({ mass: 1, ...props }))
  const controls = useControls()
  const x = useRef();


  useFrame(() => {
    const { forward, backward, left, right } = controls.current


    

  });
  
  return (
    <mesh ref={x}>
      <mesh castShadow ref={ref} >
        <boxGeometry />
        <meshStandardMaterial color="orange" />
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
        <Cube position={[0, 0.5, 0]} />
      </Physics>
    </Canvas>
  )
}