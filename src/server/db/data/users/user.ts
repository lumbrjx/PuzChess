import prisma from "@/server/db/seed";
import { Prisma } from "@prisma/client";
export const createUser = async (
  username: string,
  password: string,
  email: string,
  chessElo?: number,
  role?: "roles" | undefined,
  badge?: "budges" | undefined
) => {
  try {
    const user = await prisma.user.create({
      data: <userType>{
        username,
        password,
        email,
        chessElo,
        role,
        badge,
      },
    });
    return user;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        throw "There is a unique constraint violation, a new user cannot be created with this email";
      }
    }
    throw e;
  }
};
