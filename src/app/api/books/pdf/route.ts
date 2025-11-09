import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma/prisma";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
    }

    const book = await prisma.book.findUnique({
        where: { id: Number(id) },
        select: { pdf: true, title: true },
    });

    if (!book || !book.pdf) {
        return NextResponse.json({ error: "PDF not found" }, { status: 404 });
    }

    const imageBuffer = Buffer.from(book.pdf, "base64");

    return new Response(imageBuffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename="${encodeURIComponent(book.title)}.png"`,
        },
    });
}
