import prisma from "@/server/db/seed";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
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
