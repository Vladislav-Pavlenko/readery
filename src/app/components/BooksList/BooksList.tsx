'use client'
import BooksListItem from "../BooksListItem/BooksListItem";
import styles from "./BooksList.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface Book {
    id: string;
    title: string;
    genre: string;
    author: string;
}
export default function BooksList() {
    const [books, setBooks] = useState<Book[]>([]);
    useEffect(() => {
        const handler = async () => {
            try {
                const response = await axios.get("/api/books");
                setBooks(response.data.data);
            } catch (err: unknown) {
                const errorMessage =
                    err instanceof Error ? err.message : "Unknown error";
                toast.error(`Error: ${errorMessage}`);
            }
        };
        handler();
    }, []);

  return (
      <>
          <Toaster/>
          <ul className={styles.list}>
          {books.map((item, index) => (
              <BooksListItem
                  key={index}
                  id={item.id}
                  title={item.title}
                  author={item.author}
              />
          ))}
      </ul></>

  );
}
