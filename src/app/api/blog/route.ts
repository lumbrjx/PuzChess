import prisma from "@/server/db/seed";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";

export async function GET(req: NextRequest) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({ message: "unauthenticated" }, { status: 401 });
  }
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
    console.error(error);
    return NextResponse.json(error);
  }
}
