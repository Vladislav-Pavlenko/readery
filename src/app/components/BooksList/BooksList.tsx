import BooksListItem from "../BooksListItem/BooksListItem";
import styles from "./BooksList.module.css";

export default function BooksList() {
  const bookArray = [
    {
      imageUrl:
        "https://static.yakaboo.ua/media/catalog/product/2/c/2cb731ee5ef9374b32b55584d8d35bdc.jpg",
      title: "Без меріт",
      author: "Колін Гувер",
    },
    {
      imageUrl:
        "https://static.yakaboo.ua/media/catalog/product/c/o/cover_1986_1.jpg",
      title: "Ніч, коли Олівія впала",
      author: "Колін Гувер",
    },
    {
      imageUrl:
        "https://static.yakaboo.ua/media/catalog/product/c/o/cover_2182_1.jpg",
      title: "Два кроки назустріч",
      author: "Колін Гувер",
    },
    {
      imageUrl:
        "https://static.yakaboo.ua/media/catalog/product/c/o/cover_1871_1.jpg",
      title: "Крізь дзеркала. Зимові заручини",
      author: "Колін Гувер",
    },
    {
      imageUrl:
        "https://static.yakaboo.ua/media/catalog/product/2/c/2cb731ee5ef9374b32b55584d8d35bdc.jpg",
      title: "Без меріт",
      author: "Колін Гувер",
    },
    {
      imageUrl:
        "https://static.yakaboo.ua/media/catalog/product/c/o/cover_1986_1.jpg",
      title: "Ніч, коли Олівія впала",
      author: "Колін Гувер",
    },
    {
      imageUrl:
        "https://static.yakaboo.ua/media/catalog/product/c/o/cover_2182_1.jpg",
      title: "Два кроки назустріч",
      author: "Колін Гувер",
    },
    {
      imageUrl:
        "https://static.yakaboo.ua/media/catalog/product/2/c/2cb731ee5ef9374b32b55584d8d35bdc.jpg",
      title: "Без меріт",
      author: "Колін Гувер",
    },
    {
      imageUrl:
        "https://static.yakaboo.ua/media/catalog/product/c/o/cover_1986_1.jpg",
      title: "Ніч, коли Олівія впала",
      author: "Колін Гувер",
    },
    {
      imageUrl:
        "https://static.yakaboo.ua/media/catalog/product/c/o/cover_2182_1.jpg",
      title: "Два кроки назустріч",
      author: "Колін Гувер",
    },
  ];
  return (
    <ul className={styles.list}>
      {bookArray.map((item, index) => (
        <BooksListItem
          key={index}
          imageUrl={item.imageUrl}
          title={item.title}
          author={item.author}
        />
      ))}
    </ul>
  );
}
