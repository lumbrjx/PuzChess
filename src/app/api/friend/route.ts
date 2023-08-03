import { form, formReg } from "@/schemas/forms";
import { RemFriend, addFriend } from "@/server/db/data/users/friend";
import prisma from "@/server/db/seed";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email") as string;
  const { friendId } = await req.json();
  if (!friendId || !email) {
    return NextResponse.json(
      { message: "Missing required data" },
      { status: 400 }
    );
  }

  try {
    console.log("im email", email);
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
        console.log("erorrr found");
        return NextResponse.json("u're already following this user");
      }
    } catch {
      const user = await addFriend(email, friendId);
      console.log("erorrr not found");
      return NextResponse.json(user);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json("error check server");
  }
}
