import { getAuthUser } from "@/server/db/data/users/user";
import { options } from "../../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";

import BlogsList from "@/components/layout/blogsList";

export default async function Dashboard() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }
  if (session) {
    const authUser = await getAuthUser(session.user?.email as string);
    if (authUser?.role !== "ADMIN") {
      redirect("/denied");
    }
  }

  return (
    <section className="flex flex-col items-center justify-center w-full  lg:px-8 px-2 p-36">
      {/* more stuff later */}
      <BlogsList />
    </section>
  );
}
