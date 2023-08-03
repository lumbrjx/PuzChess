import { form, formReg } from "@/schemas/forms";
import { deleteUser } from "@/server/db/data/users/user";
import prisma from "@/server/db/seed";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { message: "Missing required data" },
      { status: 400 }
    );
  }
  console.log(email);
  try {
    const user = await deleteUser(email);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json("error check server");
  }
}
