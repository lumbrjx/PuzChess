import prisma from "@/server/db/seed";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const take = 4;
  const cursorQuery =
    (req.nextUrl.searchParams.get("cursor") as string) ?? undefined;
  const skip = cursorQuery ? 1 : 0;
  const cursor = cursorQuery ? { id: cursorQuery } : undefined;

  try {
    const posts = await prisma.blog.findMany({
      skip,
      take,
      cursor,
    });
    const nextId = posts.length < take ? undefined : posts[take - 1].id;
    return NextResponse.json({ posts, nextId });
  } catch (error) {
    return NextResponse.json(error);
  }
}
