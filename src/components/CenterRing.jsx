import { RigidBody } from "@react-three/rapier";
import { Text3D } from "@react-three/drei";
import { Attractor } from "@react-three/rapier";

export default function CenterRing() {
  return (
    <>
      <RigidBody type="fixed">
        <mesh position={[-1, 3, -4.8]}>
          <Text3D font={"/fonts/poppins.json"} color={"green"}>
            50
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
        <mesh position={[0, 1.8, -3.7]} rotation={[2.6, 3.2, 0]}>
          <circleGeometry args={[0.8, 18, 0, 6.285]} />
          <meshNormalMaterial side={2} opacity={0.65} transparent />
        </mesh>
      </RigidBody>
    </>
  );
}
