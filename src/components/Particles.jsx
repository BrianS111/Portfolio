import { useMemo } from "react";
import { BufferAttribute } from "three";

export default function Stars({ count = 700 }) {
  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 90);
    return new BufferAttribute(new Float32Array(p), 3);
  }, [count]);

  return (
    <points position={[-13, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} {...points} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        threshold={0.1}
        color={"rgb(0, 170, 244)"}
        sizeAttenuation={true}
      />
    </points>
  );
}
