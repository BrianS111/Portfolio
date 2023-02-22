import { RigidBody } from "@react-three/rapier";
import { Float, Text3D } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function RightRing() {
  return (
    <>
      <RigidBody type="fixed">
        <mesh position={[3.25, 2, -4.8]}>
          <Text3D font={"/fonts/poppins.json"}>
            25
            <meshNormalMaterial />
          </Text3D>
        </mesh>
      </RigidBody>

      <RigidBody
        type="fixed"
        colliders="trimesh"
        sensor
        onIntersectionEnter={() => console.log("Center")}
      >
        <mesh position={[4, 0.5, -3.7]} rotation={[2.1, 3.2, 0]}>
          <circleGeometry args={[1.15, 18, 0, 6.285]} />
          <meshStandardMaterial color="blue" opacity={0.65} transparent />
        </mesh>
      </RigidBody>
    </>
  );
}
