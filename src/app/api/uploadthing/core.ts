import prisma from "@/server/db/seed";
import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { options } from "../auth/[...nextauth]/options";
import { getUser } from "@/server/db/data/users/user";
import { NextRequest } from "next/server";
import { getSession } from "next-auth/react";

const f = createUploadthing();
async function redReq() {
  // const session = getSession({ req });
  const session = await getServerSession(options);
  if (!session) {
    throw new Error("Unauthorized");
  }
  return { userId: session?.user?.email };
}
export const ourFileRouter = {
  // Example "profile picture upload" route - these can be named whatever you want!
  profilePicture: f(["image"])
    .middleware(async () => await redReq())
    .onUploadComplete(async ({ metadata, file }) => {
      await prisma.user.update({
        where: {
          email: metadata.userId as any,
        },
        data: {
          image: file.url, // Assign the calculated badge
        },
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
