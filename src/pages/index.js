import Head from "next/head";
import { Inter } from "@next/font/google";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import LanguageBoxes from "@/components/LanguageBoxes";
import { OrbitControls } from "@react-three/drei";
import Floor from "@/components/Floor";
import Fence from '@/components/Fence'
import Stars from "@/components/Stars";
// const inter = Inter({ subsets: ["latin"] });

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
        <Canvas>
          <Physics>
            <LanguageBoxes />
            <Stars />
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
