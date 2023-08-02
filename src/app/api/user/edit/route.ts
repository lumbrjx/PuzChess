import { form, formReg } from "@/schemas/forms";
import prisma from "@/server/db/seed";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email") as string;
  const { username, chessElo } = await req.json();
  if (!username || !email || !chessElo) {
    return NextResponse.json(
      { message: "Missing required data" },
      { status: 400 }
    );
  }

  try {
    const parsed = formReg.parse({ username, chessElo });
    console.log(parsed.chessElo);
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        name: parsed.username,
        chessElo: parsed.chessElo as any, // Assign the calculated badge
      },
    });

    return NextResponse.json("updated!");
  } catch (error) {
    console.log(error);
    return NextResponse.json("error check server");
  }
}
