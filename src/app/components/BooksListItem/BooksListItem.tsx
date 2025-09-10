import Image from "next/image";
import styles from "./BooksListItem.module.css";

interface BooksListItemProps {
  imageUrl: string;
  title: string;
  author: string;
}
export default function BooksListItem({
  imageUrl,
  title,
  author,
}: BooksListItemProps) {
  return (
    <li className={styles.item}>
      <Image
        className={styles.image}
        src={imageUrl}
        alt={`Book ${title}`}
        width="150"
        height="232"
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.author}>{author}</p>
    </li>
  );
}
