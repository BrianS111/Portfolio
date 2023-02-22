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
    "boxes/javascript.png",
    "boxes/html.png",
    "boxes/css.png",
    "boxes/typescript.png",
    "boxes/react.png",
    "boxes/next.png",
    "boxes/vercel.png",
    "boxes/styledComponents.png",
    "boxes/tailwind.png",
    "boxes/github.png",
    "boxes/figma.png",
    "boxes/three.png",
    "boxes/supabase.png",
    "boxes/rainbowKit.png",
    "boxes/metamask.png",
  ]);

  const boxes = [
    { name: javascript, map: javascriptColor },
    { name: html, map: htmlColor },
    { name: css, map: cssColor },
    { name: typescript, map: typescriptColor },
    { name: react, map: reactColor },
    { name: next, map: nextColor },
    { name: vercel, map: vercelColor },
    { name: styledComponents, map: styledComponentsColor },
    { name: tailwind, map: tailwindColor },
    { name: github, map: githubColor },
    { name: figma, map: figmaColor },
    { name: three, map: threeColor },
    { name: supabase, map: supabaseColor },
    { name: rainbowkit, map: rainbowkitColor },
    { name: metamask, map: metamaskColor },
  ];

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
    box.current.applyTorqueImpulse({ x: 0.05, y: 0.025, z: 0.05 }, true);
    // A one-off "push"
    box.current.applyImpulse({ x: -0.25, y: 1.25, z: 2.5 }, true);
  };

  return (
    <>
      {boxes.map((box, index) => (
        <RigidBody key={index} onClick={() => handleClick(box.name)} ref={box.name} restitution={0.5}>
          <mesh
            position={[
              Math.random() * 7 - 3,
              Math.random() * (5 - 3) + 3,
              Math.random() * (-1 - -3 + 1) + -1.5,
            ]}
          >
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={box.map} />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
}
