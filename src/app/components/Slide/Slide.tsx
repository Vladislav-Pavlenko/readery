import Image from "next/image";
import styles from "./Slide.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import 'swiper/css';


interface BooksListItemProps {
    id: string;
    title: string;
}
export default function BooksListItem({
                                          id,
                                         title
                                      }: BooksListItemProps) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const response = await axios.get(`/api/books/image?id=${id}`, {
                    responseType: "blob",
                });

                const url = URL.createObjectURL(response.data);
                setImageUrl(url);
            } catch (error) {
                console.error("❌ Error loading image:", error);
            }
        };

        loadImage();
    }, [id]);
    return (
        <div className={styles.content}>
            {imageUrl && <Image
                className={styles.image}
                src={imageUrl}
                alt={`Book ${title}`}
                width="150"
                height="232"

            />}
        </div>
    );
}