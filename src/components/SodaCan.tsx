"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";

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

  useEffect(() => {
    // Check if textures are loaded before accessing them
    if (labels.ognjen && labels.naima && labels.nadine && labels.brutus && labels.lane) {
      // Fixes upside down labels
      labels.ognjen.flipY = false;
      labels.naima.flipY = false;
      labels.nadine.flipY = false;
      labels.brutus.flipY = false;
      labels.lane.flipY = false;
    }
  }, [labels]);

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
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
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
