import prisma from "@/server/db/seed";

export async function addFriend(email: string, friendId: any) {
  const userid = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });
  const friendid = await prisma.user.findUnique({
    where: {
      email: friendId,
    },
    select: {
      id: true,
    },
  });

  const user = await prisma.user.update({
    where: {
      id: userid?.id as any,
    },
    data: {
      following: {
        connect: {
          id: friendid?.id as any,
        },
      },
    },
    include: {
      following: true,
    },
  });
  await prisma.user.update({
    where: {
      id: friendid?.id as any,
    },
    data: {
      followedBy: {
        connect: {
          id: userid?.id as any,
        },
      },
    },
    include: {
      following: false,
      _count: false,
      followedBy: false,
    },
  });

  return user;
}
export async function RemFriend(email: string, friendId: any) {
  const userid = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });
  const friendid = await prisma.user.findUnique({
    where: {
      email: friendId,
    },
    select: {
      id: true,
    },
  });

  const user = await prisma.user.update({
    where: {
      id: userid?.id as any,
    },
    data: {
      following: {
        disconnect: { id: friendid?.id },
      },
    },
    include: {
      following: true,
    },
  });
  await prisma.user.update({
    where: {
      id: friendid?.id as any,
    },
    data: {
      followedBy: {
        disconnect: {
          id: userid?.id as any,
        },
      },
    },
    include: {
      following: false,
      _count: false,
      followedBy: false,
    },
  });

  return user;
}
