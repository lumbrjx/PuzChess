import { RemFriend } from "@/server/db/data/users/friend";

import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
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
    const user = await RemFriend(email, friendId);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json("error check server");
  }
}
