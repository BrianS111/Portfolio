import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLayoutEffect } from "react";
import { useState } from "react";

export default function Wall({ placement, loader }) {
  const [fenceColor, setFenceColor] = useState(null)
  const [fenceAlpha, setFenceAlpha] = useState(null)
  
  const textureLoader = new TextureLoader(loader);


  useLayoutEffect(() => {
    const fenceColor = textureLoader.load('fence/fenceColor.png')
    const fenceAlpha = textureLoader.load('fence/fenceAlpha.png')

    setFenceColor(fenceColor)
    setFenceAlpha(fenceAlpha)
  },[])


  if (placement === "left") {
    return (
      <RigidBody type={"fixed"}>
        <mesh position={[-6, 0.75, -0]}>
          <boxGeometry args={[0.025, 5.5, 10]} />
          <meshStandardMaterial
            map={fenceColor}
            alphaMap={fenceAlpha}
            alphaTest={0}
            transparent={true}
            opacity={0.5}
          />
        </mesh>
      </RigidBody>
    );
  }

  if (placement === "right") {
    return (
      <RigidBody type={"fixed"}>
        <mesh position={[6, 0.75, -0]}>
          <boxGeometry args={[0.025, 5.5, 10]} />
          <meshStandardMaterial
            map={fenceColor}
            alphaMap={fenceAlpha}
            alphaTest={0}
            transparent={true}
            opacity={0.5}
          />
        </mesh>
      </RigidBody>
    );
  }
  
  if (placement === "back") {
    return (
      <RigidBody type={"fixed"}>
        <mesh position={[0, 0.75, -5]}>
          <boxGeometry args={[12, 5.5, 0.025]} />
          <meshStandardMaterial
            map={fenceColor}
            alphaMap={fenceAlpha}
            opacity={0.5}
            transparent={true}
          />
        </mesh>
      </RigidBody>
    );
  }
}
