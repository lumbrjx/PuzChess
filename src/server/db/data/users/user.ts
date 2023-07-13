import prisma from "@/server/db/seed";
import { Prisma } from "@prisma/client";
export const createUser = async (
  name: string,
  password: string,
  email: string,
  chessElo?: number,
  role?: "roles" | undefined,
  badge?: "budges" | undefined
) => {
  try {
    const user = await prisma.user.create({
      data: any{
        name,
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
        throw "There is a unique constraint violation, a new user cannot be created with this email or username";
      }
    }
    throw e;
  }
};
export const getAuthUser = async (email: string) => {
  const authUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
    select: {
      name: true,
      role: true,
    },
  });

  return authUser;
};
