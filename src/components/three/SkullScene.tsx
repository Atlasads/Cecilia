import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Skull() {
  const { scene } = useGLTF('/skull.glb');
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#C8BEA8'),
          roughness: 0.55,
          metalness: 0.15,
          side: THREE.FrontSide,
        });
        mesh.castShadow = false;
        mesh.receiveShadow = false;
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.3;
    ref.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08;
  });

  return (
    <group ref={ref} scale={[7, 7, 3]} rotation={[0.15, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export function SkullScene() {
  return (
    <Canvas
      className="pointer-events-none"
      camera={{ position: [0, 0, 4], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); }}
    >
      <ambientLight intensity={0.25} color="#3a2a4a" />
      <directionalLight position={[0, 4, 3]} intensity={2.2} color="#EAE0C8" />
      <pointLight position={[-2, 0, 2]} intensity={4} color="#b600a8" distance={8} />
      <pointLight position={[2, -1, 1]} intensity={1.5} color="#7040ff" distance={8} />
      <Suspense fallback={null}>
        <Skull />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload('/skull.glb');
