import prisma from "@/server/db/seed";
import { Prisma } from "@prisma/client";

// export const createUser = async (
//   name: string,
//   password: string,
//   email: string,
//   chessElo?: number,
//   role?: "roles" | undefined,
//   badge?: "budges" | undefined
// ) => {
//   try {
//     const user = await prisma.user.create({
//       data: <userType>{
//         name,
//         password,
//         email,
//         chessElo,
//         role,
//         badge,
//       },
//     });
//     return user;
//   } catch (e) {
//     if (e instanceof Prisma.PrismaClientKnownRequestError) {
//       if (e.code === "P2002") {
//         throw "There is a unique constraint violation, a new user cannot be created with this email or username";
//       }
//     }
//     throw e;
//   }
// };

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
export const getUser = async (email: string | any) => {
  const theUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
    select: {
      name: true,
      badge: true,
      chessElo: true,
      email: true,
      image: true,
      score : true,
    },
  });

  return theUser;
};
export const getUserName = async (email: string | any) => {
  const theUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
    select: {
      name: true,
    },
  });

  return theUser;
};
export const showUser = async (name: string) => {
  const theUser = await prisma.user.findFirst({
    where: {
      name: name,
    },
    select: {
      name: true,
      badge: true,
      chessElo: true,
      image: true,
    },
  });
  console.log(theUser);
  return theUser;
};
export const getPlayers = async () => {
  const topPlayers = await prisma.user.findMany({
    orderBy: {
      score: "desc", // Order by score in descending order
    },
    take: 100, // Limit the results to the first 100 users
    select: {
      name: true,
      badge: true,
      score: true,
      image: true,
    },
  });

  return topPlayers;
};
