import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Canvas } from "@react-three/fiber";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BrianS111</title>
        <meta name="description" content="BrianS111 front end developer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div style={{ height: "100vh", width: "100%" }}>
      <Canvas>
        <mesh position={[0, -1, 1]}>
          <boxBufferGeometry args={[12, 0.25, 6]} />
          <meshStandardMaterial color='black'/>
        </mesh>
        <ambientLight />
      </Canvas>
    </div>
    </>
  )
}
