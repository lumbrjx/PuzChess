import { getAuthUser } from "@/server/db/data/users/user";
import { options } from "../../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
import { getBlogs } from "@/server/db/data/users/blog";
import BlogsList from "@/components/layout/blogsList";

export default async function Dashboard() {
  const session = await getServerSession(options);
  let theblogs;
  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }
  if (session) {
    const authUser = await getAuthUser(session.user?.email as string);
    if (authUser?.role !== "ADMIN") {
      redirect("/denied");
    }
    if (session) {
      const blogs = await getBlogs();
      theblogs = blogs;
    }
  }

  return (
    <section className="flex flex-col gap-6 p-20">
      {/* more stuff later */}
      <BlogsList blogs={theblogs} />
    </section>
  );
}
