import { useState } from "react";
import styles from "../styles/parent.module.scss";

export default function Parent() {
  const [visible, setVisible] = useState(true);
  return (
    <div className={styles.parent}>
      <h2 className={styles.title}>Parent selector</h2>
      {visible && (
        <p className={styles.para}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
          enim nulla dolore ipsam aspernatur velit quas tempora similique
          voluptate quidem, omnis esse. Mollitia maxime voluptatem iste
          doloremque dolore porro? Sed.
        </p>
      )}
      <button onClick={() => setVisible(!visible)} className={styles.bton}>
        Hide/show
      </button>
    </div>
  );
}
