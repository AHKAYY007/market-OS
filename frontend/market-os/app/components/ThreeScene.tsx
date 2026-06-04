"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function InventoryScene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime / 3) * 0.05;
    }
  });

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      <mesh position={[-0.9, 0.4, 0]} rotation={[0.1, 0.35, -0.15]}>
        <boxGeometry args={[1.4, 1.1, 0.8]} />
        <meshStandardMaterial color="#0f766e" metalness={0.4} roughness={0.2} />
      </mesh>
      <mesh position={[0.6, 0.8, 0.2]} rotation={[0.15, -0.25, 0.2]}> 
        <boxGeometry args={[1.1, 0.9, 0.7]} />
        <meshStandardMaterial color="#14b8a6" metalness={0.35} roughness={0.25} />
      </mesh>
      <mesh position={[0, -0.35, -0.15]} rotation={[0.1, 0.1, 0]}> 
        <boxGeometry args={[1.5, 0.6, 0.6]} />
        <meshStandardMaterial color="#22c55e" metalness={0.4} roughness={0.22} />
      </mesh>
      <mesh position={[0.4, 0.1, 0.8]} rotation={[0.9, 0.2, 0.1]}>
        <cylinderGeometry args={[0.22, 0.22, 0.7, 32]} />
        <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.1} />
      </mesh>
      <mesh position={[0.55, 0.9, -0.4]} rotation={[-0.2, 0.8, 0.3]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.7} roughness={0.15} />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="rounded-4xl bg-slate-950 p-4 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        style={{ height: 520, width: "100%", borderRadius: "1.25rem" }}
      >
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 2, -3]} intensity={0.6} />
        <InventoryScene />
      </Canvas>
    </div>
  );
}
