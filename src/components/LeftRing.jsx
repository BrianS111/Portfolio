import { RigidBody, TrimeshCollider } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Text3D } from "@react-three/drei";

export default function LeftRing() {
  return (
    <>
      <RigidBody type="fixed">
        <mesh position={[-4.6, 1.5, -4.8]}>
          <Text3D font={"/fonts/poppins.json"} color={"green"}>
            10
            <meshNormalMaterial />
          </Text3D>
        </mesh>
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        sensor
        onIntersectionEnter={() => console.log("Left")}
      >
        <mesh position={[-4, -0.2, -3.3]} rotation={[2.1, 3.2, 0]}>
          <circleGeometry args={[1.5, 18, 7, 6.283]} />
          <meshStandardMaterial color={"green"} opacity={0.65} transparent />
        </mesh>
      </RigidBody>
    </>
  );
}
