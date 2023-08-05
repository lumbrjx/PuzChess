import prisma from "@/server/db/seed";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";

export async function GET(req: NextRequest) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({ message: "unauthenticated" }, { status: 401 });
  }
  const email = req.nextUrl.searchParams.get("email") as string;
  try {
    const user = await prisma.user.findMany({
      where: {
        email,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json(error);
  }
}
