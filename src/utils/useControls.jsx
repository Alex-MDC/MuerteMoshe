import { useEffect, useRef } from 'react'

export function useKeyPress(target, event) {
  useEffect(() => {
    const downHandler = ({ key }) => target.indexOf(key) !== -1 && event(true)
    const upHandler = ({ key }) => target.indexOf(key) !== -1 && event(false)
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])
}

export function useControls() {
  const keys = useRef({ forward: false, backward: false, left: false, right: false})
  useKeyPress(['ArrowUp', 'w'], (pressed) => (keys.current.forward = pressed))
  useKeyPress(['ArrowDown', 's'], (pressed) => (keys.current.backward = pressed))
  useKeyPress(['ArrowLeft', 'a'], (pressed) => (keys.current.left = pressed))
  useKeyPress(['ArrowRight', 'd'], (pressed) => (keys.current.right = pressed))
  return keys
}


