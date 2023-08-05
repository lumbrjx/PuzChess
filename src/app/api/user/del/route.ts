import { deleteUser } from "@/server/db/data/users/user";

import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({ message: "unauthenticated" }, { status: 401 });
  }
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { message: "Missing required data" },
      { status: 400 }
    );
  }

  try {
    const user = await deleteUser(email);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json("error check server");
  }
}
