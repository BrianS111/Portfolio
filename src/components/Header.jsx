import Styles from "../styles/header.module.css";

export default function Header({ score, handleShowAboutModal, handleShowContactModal }) {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.score}>Score: {score} </h1>
      <nav>
        <ul className={Styles.listItems}>
          <li onClick={handleShowAboutModal} className={Styles.aboutListItem}>About</li>
          <li onClick={handleShowContactModal} className={Styles.contactListItem}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
