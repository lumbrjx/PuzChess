import { getAuthUser } from "@/server/db/data/users/user";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";

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
    <section className="flex flex-col gap-6">
      {/* more stuff later */}
      <p>dashboard</p>
    </section>
  );
}
