'use client'
import {useEffect, useState} from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay"
import Slide from "../Slide/Slide";

interface Book {
    id: string;
    title: string;
}

export default function Slider (){
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

    return <>
        <Toaster/>

        <Swiper effect={"coverflow"}
                grabCursor={true}
                initialSlide={1}
                centeredSlides={true}
                modules={[EffectCoverflow, Autoplay]}
                slidesPerView={3}
                autoplay={{
                    delay: 1500,
                }}
                className={styles.swiper}
                coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        }}>
            {books.map((item, index) => (
                <SwiperSlide key={index}>
                    <Slide id={item.id} title={item.title}/>
                </SwiperSlide>
            ))}
        </Swiper></>
}