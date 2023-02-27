import { RigidBody } from "@react-three/rapier";
import { TextureLoader } from "three";
import { useLayoutEffect, useState } from "react";


export default function Floor({loader}) {
  const textureLoader = new TextureLoader(loader);
  const [floorColor, setFloorColor] = useState(null)

  useLayoutEffect(() => {
    const floorColor = textureLoader.load("floor/floorColor.jpg");
    setFloorColor(floorColor)
  },[])
  
  return (
    <RigidBody type="fixed">
      <mesh position={[0, -2, 1.5]}>
        <boxGeometry args={[12, 0.25, 13]} />
        <meshStandardMaterial map={floorColor} />
      </mesh>
    </RigidBody>
  );
}
