"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function BookPdfPage() {
    const params = useParams();
    const id = params.id;

    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    useEffect(() => {
        if (!id || Array.isArray(id)) return;

        const fetchPdf = async () => {
            try {
                const response = await axios.get(`/api/books/pdf?id=${id}`, {
                    responseType: "blob",
                });
                const url = URL.createObjectURL(response.data);
                setPdfUrl(url);
            } catch (err) {
                console.error("Помилка завантаження PDF:", err);
            }
        };

        fetchPdf();

        // Очищення URL при демонтажі компонента
        return () => {
            if (pdfUrl) URL.revokeObjectURL(pdfUrl);
        };
    }, [id]);

    if (!id || Array.isArray(id)) return <p>Невірний параметр id</p>;
    if (!pdfUrl) return <p>Завантаження PDF...</p>;

    return (
        <iframe
            src={pdfUrl}
            style={{ width: "100%", height: "90vh", border: "none" }}
            title="PDF Viewer"
        />
    );
}
