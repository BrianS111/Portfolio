import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Trajectory from "@/components/Trajectory";
import { OrbitControls } from "@react-three/drei";
import Floor from "@/components/Floor";
import Wall from "@/components/Wall";
import Particles from "@/components/Particles";
import Target from "@/components/Target";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);
  const [sliderX, setSliderX] = useState(0);
  const [sliderY, setSliderY] = useState(1.25);
  const [sliderZ, setSliderZ] = useState(0.5);

  const handleXChange = (e) => {
    setSliderX(+e.target.value);
  };
  const handleYChange = (e) => {
    setSliderY(+e.target.value);
  };
  const handleZChange = (e) => {
    setSliderZ(+e.target.value);
  };

  return (
    <>
      <Head>
        <title>BrianS111.eth - Portfolio</title>
        <meta
          name="description"
          content="BrianS111 front end developer portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ height: "100vh", width: "100%", background: "black" }}>
        <h1 className="score">Score: {score}</h1>
        <Canvas shadows>
          <Physics>
            <Trajectory z={sliderZ * -1} x={sliderX} y={sliderY} />
            <Particles />
            <Target position="left" setScore={setScore} />
            <Target position="center" setScore={setScore} />
            <Target position="right" setScore={setScore} />
            <Wall placement="left" />
            <Wall placement="right" />
            <Wall placement="back" />
            <Floor />
            <ambientLight />
          </Physics>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}
