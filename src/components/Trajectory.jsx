import { RigidBody } from "@react-three/rapier";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export default function LanguageBoxes({ x,y,z }) {
  const [boxes, setBoxes] = useState([]);

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

  useEffect(() => {
    const boxes = [
      {
        name: javascript,
        map: javascriptColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: html,
        map: htmlColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: css,
        map: cssColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: typescript,
        map: typescriptColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: react,
        map: reactColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: next,
        map: nextColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: vercel,
        map: vercelColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: styledComponents,
        map: styledComponentsColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: tailwind,
        map: tailwindColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: github,
        map: githubColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: figma,
        map: figmaColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: three,
        map: threeColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: supabase,
        map: supabaseColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: rainbowkit,
        map: rainbowkitColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
      {
        name: metamask,
        map: metamaskColor,
        randomX: Math.random() * 7 - 3,
        randomY: Math.random() * (5 - 3) + 3,
        randomZ: Math.random() * (-1 - -3 + 1) + -1.5,
      },
    ];
    setBoxes(boxes);
  }, []);

  //       // A one-off "push"
  //       box.current.applyImpulse({ x: 0, y: 1, z: 0 }, true);

  //       // A continuous force
  //       box.current.addForce({ x: 0, y: 1, z: 0 }, true);

  //       // A one-off torque rotation
  //       box.current.applyTorqueImpulse({ x: 0, y: 1, z: 0 }, true);

  //       // A continuous torque
  //       box.current.addTorque({ x: 0, y: 1, z: 0 }, true);

  const handleClick = (box) => {
    // A one-off torque rotation
    box.current.applyTorqueImpulse({ x: 0.05, y: 0.05, z: 0.05 }, true);
    // A one-off "push"
    box.current.applyImpulse({ x: x, y: y, z: z }, true);
  };

  return (
    <>
      {boxes.map((box, index) => (
        <RigidBody
          key={index}
          onClick={() => handleClick(box.name)}
          ref={box.name}
          restitution={0.5}
        >
          <mesh position={[box.randomX, box.randomY, box.randomZ]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial map={box.map} />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
}
