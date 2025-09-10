import Image from "next/image";
import styles from "./page.module.css";

export default function Launch() {
  return (
    <main className={styles.main}>
      <Image src="/img/logo.png" alt="Readmore" width="127" height="127" />
    </main>
  );
}
