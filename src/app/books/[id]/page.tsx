'use client'
import styles from "./page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Book {
    id: string;
    title: string;
    genre: string;
    author: string;
    description: string;
}

export default function Book() {
    const { id } = useParams();
    const [book, setBook] = useState<Book>();
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const handler = async () => {

            try {

                const responseBook = await axios.get(`/api/books?id=${id}`);
                setBook(responseBook.data.data[0]);

                const responseImage = await axios.get(`/api/books/image?id=${id}`, {
                    responseType: "blob",
                });
                const url = URL.createObjectURL(responseImage.data);
                setImageUrl(url);
            } catch (err: unknown) {
                const errorMessage = err instanceof Error ? err.message : "Unknown error";
                toast.error(`Error: ${errorMessage}`);
            }
        };

        handler();
    }, [id]);

    return (
        <main className={styles.main}>
            <Toaster />
            {imageUrl && (
                <Image
                    className={styles.image}
                    src={imageUrl}
                    alt={`Book ${book?.title}`}
                    width={323}
                    height={317}
                    loading="lazy"
                />
            )}
            <h1 className={styles.title}>{`${book?.title} - ${book?.author}`}</h1>
            <p className={styles.description}>{book?.description}</p>
            <Link className={styles.button} href={`/books/pdf/${id}`}>Read This Book</Link>
        </main>
    );
}
