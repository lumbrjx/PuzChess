import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
import BlogsList from "@/components/layout/blogsList";
import FrontBlogsList from "@/components/layout/frontBlogList";

export default async function Dashboard() {
  const session = await getServerSession(options);

  return (
    <section className="flex flex-col items-center justify-center w-full  lg:px-8 px-2 p-36">
      {/* more stuff later */}
      <FrontBlogsList />
    </section>
  );
}
