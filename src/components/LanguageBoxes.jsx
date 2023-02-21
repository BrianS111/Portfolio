import { RigidBody } from "@react-three/rapier";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export default function LanguageBoxes() {
  const [
    javascriptColor,
    htmlColor,
    cssColor,
    typescriptColor,
    reactColor,
    nextColor,
    vercelColor,
    styledComponentsColor,
    tailwindColor,
    githubColor,
    figmaColor,
    threeColor,
    supabaseColor,
    rainbowkitColor,
    metamaskColor
  ] = useLoader(TextureLoader, [
    "/javascript.png",
    "/html.png",
    "/css.png",
    "/typescript.png",
    "react.png",
    "next.png",
    "vercel.png",
    "styledComponents.png",
    "tailwind.png",
    "github.png",
    "figma.png",
    "three.png",
    "supabase.png",
    "rainbowKit.png",
    "metamask.png"
  ]);

  return (
    <>
      <RigidBody>
        <mesh position={[0, 2, 2]}>
          <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={javascriptColor} />
        </mesh>
      </RigidBody>
      <RigidBody>
        <mesh position={[-1, 2, 2]}>
          <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={htmlColor} />
        </mesh>
      </RigidBody>
      <RigidBody>
        <mesh position={[1, 2, 2]}>
          <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={cssColor} />
        </mesh>
      </RigidBody>
      <RigidBody>
        <mesh position={[1, 3, 2]}>
          <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={typescriptColor} />
        </mesh>
      </RigidBody>
      <RigidBody>
        <mesh position={[0, 3, 2]}>
          <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={reactColor} />
        </mesh>
        </RigidBody>
        <RigidBody>
          <mesh position={[-1, 3, 2]}>
            <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={nextColor} />
          </mesh>
        </RigidBody>
        <RigidBody>
          <mesh position={[-2, 4, 2]}>
            <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={vercelColor} />
          </mesh>
      </RigidBody>
        <RigidBody>
          <mesh position={[-2, 3, 2]}>
            <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={styledComponentsColor} />
          </mesh>
      </RigidBody>
        <RigidBody>
          <mesh position={[2, 3, 2]}>
            <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={tailwindColor} />
          </mesh>
      </RigidBody>
        <RigidBody>
          <mesh position={[2, 4, 2]}>
            <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={githubColor} />
          </mesh>
      </RigidBody>
        <RigidBody>
          <mesh position={[2, 5, 2]}>
            <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={figmaColor} />
          </mesh>
      </RigidBody>
        <RigidBody>
          <mesh position={[1, 5, 2]}>
            <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={threeColor} />
          </mesh>
      </RigidBody>
        <RigidBody>
          <mesh position={[0, 5, 2]}>
            <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={supabaseColor} />
          </mesh>
      </RigidBody>
        <RigidBody>
          <mesh position={[-1, 5, 2]}>
            <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={rainbowkitColor} />
          </mesh>
      </RigidBody>
        <RigidBody>
          <mesh position={[-2, 5, 2]}>
            <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={metamaskColor} />
          </mesh>
      </RigidBody>
    </>
  );
}
