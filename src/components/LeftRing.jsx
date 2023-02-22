import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function LeftRing() {
  const ten = useLoader(TextureLoader, "/ten.png");
  return (
    <RigidBody type="fixed">
      <mesh rotation={[90, 0, 0]} position={[-4, 0, -3.3]}>
        <torusGeometry args={[1.5, 0.2]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </RigidBody>
  );
}
