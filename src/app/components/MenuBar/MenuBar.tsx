"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation.js";
import styles from "./MenuBar.module.css";
import { House } from "lucide-react";
import { Compass } from "lucide-react";

export default function MenuBar() {
  const pathname = usePathname();
  const activeTab = (path: string) =>
    clsx(styles.itemLink, pathname === path && styles.active);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={activeTab("/")} href="/">
            <House />
            <span className={styles.itemLinkPage}>Home</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={activeTab("/explore")} href="/explore">
            <Compass />
            <span className={styles.itemLinkPage}>Explore</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
