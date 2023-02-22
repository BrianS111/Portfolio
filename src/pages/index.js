import Head from "next/head";
import { Inter } from "@next/font/google";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Trajectory from "@/components/Trajectory";
import { OrbitControls } from "@react-three/drei";
import Floor from "@/components/Floor";
import Wall from "@/components/Wall";
import Particles from "@/components/Particles";
import Target from "@/components/Target";
export default function Home() {
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
        <h1 className="score">Score: 0</h1>
        <Canvas shadows>
          <Physics>
            <Trajectory />
            <Particles />
            <Target position="left" />
            <Target position="center" />
            <Target position="right" />
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
