import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { DirectionalLight, TextureLoader } from "three";

export default function Floor() {
  const [floorColor, floorDisplacement, floorRoughness] = useLoader(
    TextureLoader,
    ["floor/floorColor.jpg", "floor/floorDisp.png", "floor/floorRoughness.jpg"]
  );
  return (
    <RigidBody type="fixed">
      <mesh position={[0, -2, 1.5]}>
        <boxGeometry args={[12, 0.25, 13]} />
        <meshStandardMaterial
          map={floorColor}
        //   displacementMap={floorDisplacement}
        //   roughnessMap={floorRoughness}
        />
      </mesh>
    </RigidBody>
  );
}
