import Styles from "../styles/loader.module.css";

export default function Loader({ children, loadingProgress }) {
  return (
    <>
  <div  className={Styles.container}>
    <div className={Styles.title}>Loading</div>
    <div className={Styles.subtitle}>{children}</div>
  </div>
  </>
  )
}
