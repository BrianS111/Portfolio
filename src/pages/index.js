import Head from "next/head";
import { Inter } from "@next/font/google";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import LanguageBoxes from "@/components/LanguageBoxes";
import { OrbitControls } from "@react-three/drei";
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
      <div style={{ height: "100vh", width: "100%" }}>
        <Canvas>
          <Physics>
            <LanguageBoxes />
            <RigidBody type="fixed">
              <mesh position={[0, -2, -0]}>
                <boxBufferGeometry args={[12, 0.25, 10]} />
                <meshStandardMaterial color="black" />
              </mesh>
            </RigidBody>
            <ambientLight />
            <OrbitControls />
          </Physics>
        </Canvas>
      </div>
    </>
  );
}
