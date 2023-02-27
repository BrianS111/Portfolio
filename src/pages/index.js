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
import Header from "@/components/Header";
import AboutModal from "../components/AboutModal";
import ContactModal from "@/components/ContactModal";
import { LoadingManager } from "three";
import Loader from "@/components/Loader";

export default function Home() {
  const [score, setScore] = useState(0);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const loader = new LoadingManager();

  loader.onProgress = (url, itemsLoaded, itemsTotal) => {
    console.log(
      `Loading texture ${url}. ${itemsLoaded} of ${itemsTotal} completed.`
    );
    console.log(itemsLoaded / itemsTotal + " percent");
    setLoadingProgress(Math.round((itemsLoaded / itemsTotal) * 100));
  };

  loader.onLoad = () => {
    console.log(" floor loaded");
    setShowLoader(false);
  };

  return (
    <>
      <Head>
        <title>BrianS111.eth - Portfolio</title>
        <meta
          name="description"
          content="BrianS111.eth's Front-End developer portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showLoader && (
        <Loader loadingProgress={loadingProgress}> {loadingProgress}% </Loader>
      )}
      <div style={{ height: "100vh", width: "100%", background: "black" }}>
        <Header
          score={score}
          handleShowAboutModal={() => {
            setShowContactModal(false);
            setShowAboutModal(true);
          }}
          handleShowContactModal={() => {
            setShowAboutModal(false);
            setShowContactModal(true);
          }}
        />
        {showAboutModal && (
          <AboutModal
            close={() => {
              setShowAboutModal(false);
            }}
          />
        )}
        {showContactModal && (
          <ContactModal
            close={() => {
              setShowContactModal(false);
            }}
          />
        )}

        <Canvas>
          <Physics>
            <Trajectory showLoader={showLoader} loader={loader} />
            <Particles />
            <Target position="left" setScore={setScore} loader={loader} />
            <Target position="center" setScore={setScore} loader={loader} />
            <Target position="right" setScore={setScore} loader={loader} />
            <Wall placement="left" loader={loader} />
            <Wall placement="right" loader={loader} />
            <Wall placement="back" loader={loader} />
            <Floor loader={loader} />
            <ambientLight />
          </Physics>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}
