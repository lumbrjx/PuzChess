import { addFriend } from "@/server/db/data/users/friend";
import prisma from "@/server/db/seed";

import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({ message: "unauthenticated" }, { status: 401 });
  }
  const email = req.nextUrl.searchParams.get("email") as string;
  const { friendId } = await req.json();
  if (!friendId || !email) {
    return NextResponse.json(
      { message: "Missing required data" },
      { status: 400 }
    );
  }

  try {
    try {
      const checkUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
        select: {
          following: {
            where: {
              email: friendId,
            },
          },
        },
      });
      if (checkUser?.following[0].email === friendId) {
        return NextResponse.json("u're already following this user");
      }
    } catch {
      const user = await addFriend(email, friendId);

      return NextResponse.json(user);
    }
  } catch (error) {
    return NextResponse.json("error check server");
  }
}
