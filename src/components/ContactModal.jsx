import Styles from "../styles/modal.module.css";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function ContactModal({ close }) {
  //   useLayoutEffect(() => {
  //     let ctx = gsap.context(() => {
  //       // or refs
  //       gsap.from(topContainer.current, {
  //         x: -180,
  //         opacity: 0,
  //       });
  //       gsap.from(middleContainer.current, {
  //         x: -180,
  //         opacity: 0,
  //         delay: 0.1,
  //       });
  //       gsap.from(bottomContainer.current, {
  //         x: -180,
  //         opacity: 0,
  //         delay: 0.2,
  //       });
  //     });
  //     return () => ctx.revert();
  //   }, []);

  return (
    <div className={Styles.modal}>
      <div onClick={close} className={Styles.svgContainer}>
        <svg
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
        <h2 className={Styles.header}>Contact</h2>
      </div>
      <div className={Styles.CardContainer}>
        <div className={Styles.ContactCard}>
          <div>BrianS111@gmail.com</div>
          <div>Email</div>
          <div>Svg</div>
        </div>
        <div className={Styles.ContactCard}>
          <div>BrianS111@gmail.com</div>
          <div>Email</div>
          <div>Svg</div>
        </div>
        <div className={Styles.ContactCard}>
          <div>BrianS111@gmail.com</div>
          <div>Email</div>
          <div>Svg</div>
        </div>
        <div className={Styles.ContactCard}>
          <div>BrianS111@gmail.com</div>
          <div>Email</div>
          <div>Svg</div>
        </div>
        <div className={Styles.ContactCard}>
          <div>BrianS111@gmail.com</div>
          <div>Email</div>
          <div>Svg</div>
        </div>
      </div>
    </div>
  );
}
