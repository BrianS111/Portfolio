import Head from "next/head";
import { Inter } from "@next/font/google";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import LanguageBoxes from "@/components/LanguageBoxes";
import { OrbitControls } from "@react-three/drei";
import Floor from "@/components/Floor";
import Fence from '@/components/Fence'
import Stars from "@/components/Stars";
import LeftRing from "@/components/LeftRing";
import CenterRing from "@/components/CenterRing";
import RightRing from "@/components/RightRing";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>BrianS111</title>
        <meta
          name="description"
          content="BrianS111 front end developer portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ height: "100vh", width: "100%", background: 'black' }}>
        <h1 className="score">Score: 0</h1>
        <Canvas shadows>
          <Physics>
            <LanguageBoxes />
            <Stars />
            <LeftRing />
            <CenterRing />
            <RightRing />
            <Fence placement="left" />
            <Fence placement="right" />
            <Fence placement="back" />
            <Floor />
            <ambientLight />
            <OrbitControls />
          </Physics>
        </Canvas>
      </div>
    </>
  );
}
