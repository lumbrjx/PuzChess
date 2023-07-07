import { createUser } from "@/server/db/data/users/user";
import { NextResponse } from "next/server";
import { form } from "@/schemas/forms";
const bcrypt = require("bcrypt");
export async function POST(request: Request, response: Response) {
  const { username, password, email, confirmPassword } = await request.json();
  //checking if the data is proper
  if (!username || !email || !password) {
    return NextResponse.json(
      { message: "Missing required data" },
      { status: 400 }
    );
  }
  try {
    //checking if the data is valid with zod form
    const parsedData = await form.parse({
      username,
      password,
      email,
      confirmPassword,
    });
    //hashing the password and creating the data in the database
    const hash = await bcrypt.hash(parsedData.password, 10);
    await createUser(
      parsedData.username as string,
      hash as string,
      parsedData.email as string
    );
    //returning success message
    return NextResponse.json({ message: "User created!" }, { status: 201 });
  } catch (error: unknown) {
    //returning errors
    const castedError = error as {
      issues?: Array<{ message: string; code: string }>;
    };
    const errorMessage = castedError.issues?.[0]?.message || error;
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
