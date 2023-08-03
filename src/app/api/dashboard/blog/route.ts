import prisma from "@/server/db/seed";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
import { getAuthUser } from "@/server/db/data/users/user";
import { blogForm } from "@/schemas/forms";

export async function POST(req: NextRequest) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({ message: "unauthenticated" }, { status: 401 });
  }
  if (session) {
    const authUser = await getAuthUser(session.user?.email as string);
    if (authUser?.role !== "ADMIN") {
      return NextResponse.json({ message: "unauthorized" }, { status: 403 });
    }
  }
  const { author, title, body } = await req.json();
  if (!author || !title || !body) {
    return NextResponse.json(
      { message: "Missing required data" },
      { status: 400 }
    );
  }
  try {
    const parsed = blogForm.parse({ author, title, body });
    const blog = await prisma.blog.create({
      data: {
        author: parsed.author,
        title: parsed.title,
        body: parsed.body,
      },
    });
    return NextResponse.json("blog added");
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({ message: "unauthenticated" }, { status: 401 });
  }
  if (session) {
    const authUser = await getAuthUser(session.user?.email as string);
    if (authUser?.role !== "ADMIN") {
      return NextResponse.json({ message: "unauthorized" }, { status: 403 });
    }
  }
  const { id } = await req.json();
  if (!id) {
    return NextResponse.json(
      { message: "Missing required data" },
      { status: 400 }
    );
  }
  try {
    await prisma.blog.deleteMany({
      where: {
        id: {
          contains: id,
        },
      },
    });
    return NextResponse.json("blog deleted");
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
