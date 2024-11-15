import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useCustomization } from "../context/Customization";

export default function Chair(props) {
  const { nodes, materials } = useGLTF("/model/chair-transformed.glb");
  const { material, chairColor, cushionColor } = useCustomization();

  // Leather
  const leatherTextureProps = useTexture({
    normalMap: "/textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "/textures/leather/Leather_008_Roughness.jpg",
    aoMap: "/textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  leatherTextureProps.normalMap.repeat.set(1.5, 1.5);
  leatherTextureProps.roughnessMap.repeat.set(1.5, 1.5);
  leatherTextureProps.aoMap.repeat.set(1.5, 1.5);

  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.MirroredRepeatWrapping;

  // Fabric
  const fabricTextureProps = useTexture({
    normalMap: "/textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "/textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "/textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });

  fabricTextureProps.normalMap.repeat.set(10, 10);
  fabricTextureProps.roughnessMap.repeat.set(10, 10);
  fabricTextureProps.aoMap.repeat.set(10, 10);

  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    THREE.MirroredRepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Chair.geometry}
        material={materials.Chair}
        castShadow
      >
        <meshStandardMaterial
          {...(material === "leather"
            ? leatherTextureProps
            : fabricTextureProps)}
          color={chairColor.color}
        />
      </mesh>
      <mesh
        geometry={nodes.Cushion.geometry}
        material={materials.Cushion}
        position={[0, 0.06, 0.04]}
      >
        <meshStandardMaterial
          {...fabricTextureProps}
          color={cushionColor.color}
        />
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
    </group>
  );
}

useGLTF.preload("/models/chair-transformed.glb");
