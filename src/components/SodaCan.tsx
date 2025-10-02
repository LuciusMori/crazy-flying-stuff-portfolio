"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/Soda-can.gltf");

const flavorTextures = {
  ognjen: "/labels/SodaCanLabelOgnjen.png",
  naima: "/labels/SodaCanLabelNaima.png",
  nadine: "/labels/SodaCanLabelNadine.png",
  brutus: "/labels/SodaCanLabelBrutus.png",
  lane: "/labels/SodaCanLabelLane.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCan({
  flavor = "ognjen",
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF("/Soda-can.gltf");

  const labels = useTexture(flavorTextures);
  
  // Fixes upside down labels
  if (labels.ognjen) labels.ognjen.flipY = false;
  if (labels.naima) labels.naima.flipY = false;
  if (labels.nadine) labels.nadine.flipY = false;
  if (labels.brutus) labels.brutus.flipY = false;
  if (labels.lane) labels.lane.flipY = false;

  const label = labels[flavor];

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as THREE.Mesh).geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial 
          roughness={0.15} 
          metalness={0.7} 
          map={label} 
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as THREE.Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}
