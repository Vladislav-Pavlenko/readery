import BooksList from "./components/BooksList/BooksList";
import styles from "./page.module.css";

interface Book {
    id: string;
    title: string;
    description: string;
    genre: string;
    author: string;
}

export default function Home() {

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Новинки</h1>
      <BooksList/>
    </main>
  );
}
