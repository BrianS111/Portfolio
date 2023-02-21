import { RigidBody } from "@react-three/rapier";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function LanguageBoxes() {
  const javascript = useRef();
  const html = useRef();
  const css = useRef();
  const typescript = useRef();
  const react = useRef();
  const next = useRef();
  const vercel = useRef();
  const styledComponents = useRef();
  const tailwind = useRef();
  const github = useRef();
  const figma = useRef();
  const three = useRef();
  const supabase = useRef();
  const rainbowkit = useRef();
  const metamask = useRef();
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
    metamaskColor,
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
    "metamask.png",
  ]);

  //       // A one-off "push"
  //       javascript.current.applyImpulse({ x: 0, y: 1, z: 0 }, true);

  //       // A continuous force
  //       javascript.current.addForce({ x: 0, y: 1, z: 0 }, true);

  //       // A one-off torque rotation
  //       javascript.current.applyTorqueImpulse({ x: 0, y: 1, z: 0 }, true);

  //       // A continuous torque
  //       javascript.current.addTorque({ x: 0, y: 1, z: 0 }, true);

  const handleClick = (box) => {
    // A one-off torque rotation
    box.current.applyTorqueImpulse({ x: 0.1, y: 0.3, z: 0.2 }, true);
    // A one-off "push"
    box.current.applyImpulse({ x: 0, y: 0.2, z: -0.2 }, true);
  };

  return (
    <>
      <RigidBody onClick={() => handleClick(javascript)} ref={javascript}>
        <mesh position={[0, 2, 2.5]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={javascriptColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(html)} ref={html}>
        <mesh position={[-1.15, 2, 2.2]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={htmlColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(css)} ref={css}>
        <mesh position={[1.2, 2, 2]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={cssColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(typescript)} ref={typescript}>
        <mesh position={[1, 2, 1.75]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={typescriptColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(react)} ref={react}>
        <mesh position={[1.15, 3, 1.75]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={reactColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(next)} ref={next}>
        <mesh position={[-1.25, 3, 2.15]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={nextColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(vercel)} ref={vercel}>
        <mesh position={[-1.75, 4, 2.25]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={vercelColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(styledComponents)} ref={styledComponents}>
        <mesh position={[-1.75, 3, 1.75]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={styledComponentsColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(tailwind)} ref={tailwind}>
        <mesh position={[1.5, 3, 2]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={tailwindColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(github)} ref={github}>
        <mesh position={[1.75, 4, 2.15]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={githubColor} />
        </mesh>
      </RigidBody>
      <RigidBody ref={figma} onClick={() => handleClick(figma)}>
        <mesh position={[1.75, 5, 1.75]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={figmaColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(three)} ref={three}>
        <mesh position={[0.75, 5, 2.25]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={threeColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(supabase)} ref={supabase}>
        <mesh position={[0.25, 5, 1.75]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={supabaseColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(rainbowkit)} ref={rainbowkit}>
        <mesh position={[-1.15, 5, 2]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={rainbowkitColor} />
        </mesh>
      </RigidBody>
      <RigidBody onClick={() => handleClick(metamask)} ref={metamask}>
        <mesh position={[-2.15, 5, 2]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial map={metamaskColor} />
        </mesh>
      </RigidBody>
    </>
  );
}
