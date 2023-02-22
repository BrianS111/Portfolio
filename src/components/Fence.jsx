import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Fence({ placement }) {
  const [
    fenceColor,
    fenceHeight,
    fenceMetallic,
    fenceNormal,
    fenceAlpha,
    fenceRoughness,
  ] = useLoader(TextureLoader, [
    "fence/fenceColor.png",
    "fence/fenceHeight.png",
    "fence/fenceMetallic.jpg",
    "fence/fenceNormal.png",
    "fence/fenceAlpha.png",
    "fence/fenceRoughness.jpg",
  ]);

  if (placement === "left") {
    return (
      <RigidBody type={"fixed"}>
        <mesh position={[-6, 0.75, -0]}>
          <boxGeometry args={[0.025, 5.5, 10]} />
          <meshStandardMaterial
            map={fenceColor}
            metalnessMap={fenceMetallic}
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
            metalnessMap={fenceMetallic}
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
            metalnessMap={fenceMetallic}
            alphaMap={fenceAlpha}
            opacity={0.5}
            transparent={true}
          />
        </mesh>
      </RigidBody>
    );
  }
}
