import Slider from "@/app/components/Slider/Slider";
import styles from "./page.module.css";

export default function Explore() {
  return <main>
      <Slider/>
      <h1 className={styles.title}>Explore Classic Books</h1>
      <p className={styles.description}>Whether you're craving an escape from reality, seeking wisdom, or simply looking for a captivating story to lose yourself in, popular books offer an endless array of possibilities</p>
  </main>
}
