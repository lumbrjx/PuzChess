import prisma from "@/server/db/seed";
import { Prisma } from "@prisma/client";

export const getBlogs = async () => {
  const blogs = await prisma.blog.findMany();

  return blogs;
};
export const bLogsLenght = async () => {
  const blog = await prisma.blog.count();

  return blog;
};
