import Styles from "../styles/loader.module.css";

export default function Loader({ children, loadingProgress }) {
  return (
    <>
  <div  className={Styles.bottomContainer}>
    <div className={Styles.bottomLoadingTitle}>Loading</div>
    <div className={Styles.bottomLoadingPercent}>{children}</div>
  </div>
  </>
  )
}
