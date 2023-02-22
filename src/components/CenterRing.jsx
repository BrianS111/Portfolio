import { RigidBody } from "@react-three/rapier";

export default function CenterRing() {
  return (
    <RigidBody type="fixed">
      <mesh rotation={[2.2, 0, 0]} position={[0, 1.8,-3.7]}>
        <torusGeometry args={[0.75,0.15]} />

        <meshStandardMaterial color={"red"} />
      </mesh>
    </RigidBody>
  );
}
