import { RigidBody } from "@react-three/rapier";
import { LoadingManager, TextureLoader } from "three";
import { useLayoutEffect, useRef, useState } from "react";

export default function Trajectory({ loader, showLoader }) {
  const [boxes, setBoxes] = useState([]);

  const textureLoader = new TextureLoader(loader);

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

  useLayoutEffect(() => {
    const vercelColor = textureLoader.load("boxes/vercel.png");
    const javascriptColor = textureLoader.load("boxes/javascript.png");
    const htmlColor = textureLoader.load("boxes/html.png");
    const cssColor = textureLoader.load("boxes/css.png");
    const typescriptColor = textureLoader.load("boxes/typescript.png");
    const reactColor = textureLoader.load("boxes/react.png");
    const nextColor = textureLoader.load("boxes/next.png");
    const styledComponentsColor = textureLoader.load(
      "boxes/styledcomponentsbox.png"
    );
    const tailwindColor = textureLoader.load("boxes/tailwind.png");
    const githubColor = textureLoader.load("boxes/github.png");
    const figmaColor = textureLoader.load("boxes/figma.png");
    const threeColor = textureLoader.load("boxes/three.png");
    const supabaseColor = textureLoader.load("boxes/supabase.png");
    const rainbowkitColor = textureLoader.load("boxes/rainbowkitbox.png");
    const metamaskColor = textureLoader.load("boxes/metamask.png");
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
    box.current.applyImpulse({ x: 0, y: 1, z: -0.5 }, true);
  };

  return (
    <>
      {showLoader ||
        boxes.map((box, index) => (
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
