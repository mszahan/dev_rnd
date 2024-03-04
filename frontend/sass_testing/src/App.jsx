import styles from "./styles/home.module.scss";

// const Button = ({ name }) => {
//   return <button>{name}</button>;
// };

function App() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Hola from vite</h1>
      <button className={`${styles.btn} ${styles.btnPrimary}`}>Primary</button>
      <button className={styles.btnSecondary}>Secondary</button>
      <button className={styles.btnSubmit}>Submit</button>
      <button className={styles.btnSuccess__newButton_active}>Success</button>
    </div>
  );
}

export default App;
