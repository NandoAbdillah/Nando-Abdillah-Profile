"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Avatar } from './Avatar';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

export default function AvatarCanvas() {
  return (
    <Canvas shadows    gl={{ alpha: true }}
    style={{ background: 'transparent' }} camera={{ position: [0, 2, 5], fov: 30 }}>
      {/* <color attach="background" args={["#1E1F2B"]} /> */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
      <ambientLight intensity={2} />

      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1.5}
      />



      <group position-y={-1}>
        <Suspense fallback={null}>
          <Avatar />
        </Suspense>
      </group>


      {/* Post-processing Glow */}
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={0.5}
          intensity={1.2}
          radius={0.8}
        />
      </EffectComposer>
    </Canvas>
  );
}
