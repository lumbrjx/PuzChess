import { formReg } from "@/schemas/forms";
import prisma from "@/server/db/seed";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({ message: "unauthenticated" }, { status: 401 });
  }
  const email = req.nextUrl.searchParams.get("email") as string;
  const { username, chessElo } = await req.json();
  if (!username || !email || !chessElo) {
    return NextResponse.json(
      { message: "Missing required data" },
      { status: 400 }
    );
  }

  try {
    console.log(chessElo);
    const parsed = formReg.parse({ username, chessElo });
    console.log("parsed", typeof parsed.chessElo, parsed.username);

    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        name: parsed.username,
        chessElo: parsed.chessElo as any, // Assign the calculated badge
      },
      select: {
        name: true,
        chessElo: true,
      },
    });
    console.log("user", user);
    return NextResponse.json("updated!");
  } catch (error) {
    return NextResponse.json({ status: 500, message: error });
  }
}
