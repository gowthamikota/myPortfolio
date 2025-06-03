import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function PulsatingIcosahedron() {
  const mesh = useRef();
  const pulse = useRef(0);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    mesh.current.rotation.x = elapsed / 2;
    mesh.current.rotation.y = elapsed / 1.5;
    pulse.current = 1 + 0.08 * Math.sin(elapsed * 3);
    mesh.current.scale.set(pulse.current, pulse.current, pulse.current);
  });

  return (
    <mesh ref={mesh} castShadow receiveShadow>
      <icosahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial
        color="#7F5AF0"
        emissive="#8B64FF"
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
}

function EnergyRings() {
  const ringsRef = useRef();
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    ringsRef.current.rotation.z = elapsed / 4;
    ringsRef.current.rotation.x = elapsed / 6;
  });

  return (
    <group ref={ringsRef}>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          rotation={[Math.PI / 2, 0, (i * Math.PI) / 3]}
          scale={1 + i * 0.6}
        >
          <torusGeometry args={[1 + i * 0.6, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#A18FFF"
            emissive="#A18FFF"
            emissiveIntensity={0.3}
            roughness={0}
            metalness={1}
            transparent
            opacity={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

function EnergyBeams() {
  const beamsRef = useRef();
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    beamsRef.current.rotation.y = elapsed / 7;
  });

  return (
    <group ref={beamsRef}>
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 6) * 2 * Math.PI) * 2,
            0,
            Math.sin((i / 6) * 2 * Math.PI) * 2,
          ]}
          rotation={[Math.PI / 2, 0, (i / 6) * 2 * Math.PI]}
        >
          <cylinderGeometry args={[0.015, 0.015, 0.9, 8]} />
          <meshStandardMaterial
            color="#6ED4F0"
            emissive="#6ED4F0"
            emissiveIntensity={0.4}
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

function NeuralNetworkParticles() {
  const pointsRef = useRef();
  const count = 100;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    pointsRef.current.rotation.y = elapsed / 8;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#A18FFF"
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.45}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ExplosionParticles() {
  const pointsRef = useRef();
  const velocities = useRef([]);
  const [positions] = useState(() => {
    const count = 250;
    const posArray = new Float32Array(count * 3);
    velocities.current = Array(count)
      .fill()
      .map(() => [
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
      ]);
    return posArray;
  });

  const [frozen, setFrozen] = useState(false);
  const startTime = useRef(null);
  const freezeAfter = 3.5;

  useFrame(({ clock }, delta) => {
    if (!startTime.current) startTime.current = clock.getElapsedTime();
    const elapsed = clock.getElapsedTime() - startTime.current;

    if (frozen) return;

    if (elapsed > freezeAfter) {
      setFrozen(true);
      return;
    }

    const pos = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < velocities.current.length; i++) {
      pos[i * 3] += velocities.current[i][0] * delta;
      pos[i * 3 + 1] += velocities.current[i][1] * delta;
      pos[i * 3 + 2] += velocities.current[i][2] * delta;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FF61C7"
        size={0.08}
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const FloatingAI = () => {
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setExplode(scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden"
      style={{ backgroundColor: "#0d0c0f" }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: false }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[5, 5, 5]} intensity={0.9} color="#A18FFF" />
        <pointLight position={[-5, -5, -5]} intensity={0.7} color="#6ED4F0" />
        {explode ? (
          <ExplosionParticles />
        ) : (
          <>
            <PulsatingIcosahedron />
            <EnergyRings />
            <EnergyBeams />
            <NeuralNetworkParticles />
          </>
        )}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default FloatingAI;