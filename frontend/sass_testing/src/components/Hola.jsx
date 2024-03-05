import styles from "../styles/home.module.scss";

export default function Hola() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Testing Sass with vite and react</h1>
      <button className={`${styles.btn} ${styles.btnPrimary}`}>Primary</button>
      <button className={styles.btnSecondary}>Secondary</button>
      <button className={styles.btnSubmit}>Submit</button>
      <button className={styles.btnSuccess__newButton_active}>Success</button>
    </div>
  );
}
