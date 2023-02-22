import { RigidBody } from "@react-three/rapier";

export default function RightRing() {
  return (
    <RigidBody type="fixed">
      <mesh rotation={[2.2, 0, 0]} position={[4, 0.5,-3.7]}>
        <torusGeometry args={[1,0.2]} />

        <meshStandardMaterial color={"blue"} />
      </mesh>
    </RigidBody>
  );
}
