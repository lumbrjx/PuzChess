import prisma from "@/server/db/seed";
import { Prisma } from "@prisma/client";

export const getBlog = async (id: string) => {
  const blogs = await prisma.blog.findFirst({
    where: {
      id: id,
    },
  });

  return blogs;
};
export const bLogsLenght = async () => {
  const blog = await prisma.blog.count();

  return blog;
};
