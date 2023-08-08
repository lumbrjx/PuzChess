import prisma from "@/server/db/seed";

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
      score: true,
      following: true,
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
export const showUser = async (name: string, email: any) => {
  const theUser = await prisma.user.findFirst({
    where: {
      name: name,
    },
    select: {
      email: true,
      name: true,
      badge: true,
      chessElo: true,
      image: true,
      score:true,
      followedBy: { where: { email: email }, select: { name: true } },
    },
  });

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
export const deleteUser = async (email: string) => {
  const deleteUser = await prisma.user.deleteMany({
    where: {
      email: {
        contains: email,
      },
    },
  });

  return deleteUser;
};
export const usersLenght = async () => {
  const User = await prisma.user.count();

  return User;
};
