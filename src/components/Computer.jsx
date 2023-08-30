import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/computer-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials['01___Default']} scale={2.4} />
    </group>
  )
}

useGLTF.preload('/computer-transformed.glb')
