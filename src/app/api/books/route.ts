import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../prisma/prisma";
import { buildBookFilters } from "../utils/filterBooks";
import { BookFilters } from "../types/book";

export const config = {
  api: { bodyParser: false },
};

// GET /api/books?title=&author=&genre=&id=
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const filters: BookFilters = {
      id: searchParams.get("id") ? Number(searchParams.get("id")) : undefined,
      title: searchParams.get("title") || undefined,
      author: searchParams.get("author") || undefined,
      genre: searchParams.get("genre") || undefined,
    };

    const books = await prisma.book.findMany({
      where: buildBookFilters(filters),
      select: {
        id: true,
        title: true,
        description: true,
        genre: true,
        author: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      status: 200,
      message: books.length === 0 ? "No books found" : "Books found",
      data: books,
      count: books.length,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
