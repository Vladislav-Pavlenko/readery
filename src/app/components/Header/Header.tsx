"use client";
import styles from "./Header.module.css";
import { SlidersHorizontal } from "lucide-react";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.filterBtn}>
        <SlidersHorizontal
          className={styles.filterBtnIcon}
          width="35"
          height="21"
        />
      </button>
      <div className={styles.search}>
        <button className={styles.searchBtn} type="submit">
          <Search className={styles.searchBtnIcon} width="15" />
        </button>
        <input
          className={styles.searchField}
          type="text"
          placeholder="Search a book or author..."
        />
      </div>
    </header>
  );
}
