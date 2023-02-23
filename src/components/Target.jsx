import { RigidBody } from "@react-three/rapier";
import { Text3D } from "@react-three/drei";

export default function Target({ position, setScore }) {

  const leftPointValue = 10;
  const centerPointValue = 50;
  const rightPointValue = 25;

  const leftPointPosition = [-4.6, 1.5, -4.8];
  const centerPointPosition = [-1, 3, -4.8];
  const rightPointPosition = [3.25, 2, -4.8];

  const leftMeshPosition = [-4, -0.2, -3.3];
  const centerMeshPosition = [0, 1.8, -3.7];
  const rightMeshPosition = [4, 0.5, -3.7];

  const leftMeshSize = [1.3, 18, 7, 6.283];
  const centerMeshSize = [0.8, 18, 0, 6.285];
  const rightMeshSize = [1.3, 18, 7, 6.283];

  const handleIntersect = () => {
    position === "left"
      ? setScore((score) => score + leftPointValue / 2)
      : position === "center"
      ? setScore((score) => score + centerPointValue / 2)
      : position === "right"
      ? setScore((score) => score + rightPointValue / 2)
      : null;
  };

  return (
    <>
      <RigidBody type="fixed">
        <mesh
          position={
            position === "left"
              ? leftPointPosition
              : position === "center"
              ? centerPointPosition
              : position === "right"
              ? rightPointPosition
              : null
          }
        >
          <Text3D font={"/fonts/poppins.json"}>
            {position === "left"
              ? leftPointValue
              : position === "center"
              ? centerPointValue
              : position === "right"
              ? rightPointValue
              : null}
            <meshNormalMaterial />
          </Text3D>
        </mesh>
      </RigidBody>

      <RigidBody
        type="fixed"
        colliders="trimesh"
        sensor
        onIntersectionEnter={() => handleIntersect()}
      >
        <mesh
          position={
            position === "left"
              ? leftMeshPosition
              : position === "center"
              ? centerMeshPosition
              : position === "right"
              ? rightMeshPosition
              : null
          }
          rotation={[2.6, 3.2, 0]}
        >
          <circleGeometry
            args={
              position === "left"
                ? leftMeshSize
                : position === "center"
                ? centerMeshSize
                : position === "right"
                ? rightMeshSize
                : null
            }
          />
          <meshNormalMaterial side={2} opacity={0.65} transparent />
        </mesh>
      </RigidBody>
    </>
  );
}
