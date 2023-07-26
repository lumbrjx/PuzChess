import prisma from "@/server/db/seed";
import { NextRequest, NextResponse } from "next/server";
// http://localhost:3000/api/user/game?email=${email}
export async function PATCH(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email") as string;

  let { score, state } = await req.json();

  console.log(await score);
  if (state === "WIN") {
    score += 20;
  }
  if (state === "LOSE") {
    score -= 20;
  }
  console.log(score);
  try {
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        score: score,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json("hhhhh");
  }
}
