import Styles from "../styles/modal.module.css";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Modal({ close }) {
  const topContainer = useRef();
  const middleContainer = useRef();
  const bottomContainer = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // or refs
      gsap.from(topContainer.current, {
        x: -180,
        opacity: 0,
      });
      gsap.from(middleContainer.current, {
        x: -180,
        opacity: 0,
        delay: 0.1,
      });
      gsap.from(bottomContainer.current, {
        x: -180,
        opacity: 0,
        delay: 0.2,
      });
    });
    return () => ctx.revert();
  }, []);

  return (

      <div className={Styles.modal}>
        <div onClick={close} className={Styles.svgContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 36 36"
            strokeWidth={4}
            stroke="white"
            height={36}
            width={36}
            className={Styles.exit}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className={Styles.HeaderContainer}>
          <h2 className={Styles.header}>About</h2>
        </div>

        <div ref={topContainer}>
          <h3 className={Styles.title}>
            Creative Front-End developer with an eye for design
          </h3>
          <p className={Styles.description}>
            3+ year React Typescript developer, open source contributor who has
            worked for various startups, most recenlty in web3.
          </p>
        </div>
        <div ref={middleContainer}>
          <h3 className={Styles.title}>Skills</h3>
          <p className={Styles.description}>
            I'm proficient in the languages etc. listed on the boxes in the game
            below.
          </p>
          <p className={Styles.description}>
            I've also helped build npm packages, can help with testing code,
            WebGL, and have a solid grasp of UI UX fundamentals.
          </p>
        </div>
        <div ref={bottomContainer}>
          <h3 className={Styles.title}>Let's connect</h3>
          <p className={Styles.description}>
            If you are looking for a developer to join your team, you can reach
            me via any of the methods under the contact tab.
          </p>
        </div>
      </div>
  );
}
