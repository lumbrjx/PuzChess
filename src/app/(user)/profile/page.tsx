import ProfileCard from "@/components/layout/profileCard";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
import { getUser } from "@/server/db/data/users/user";

export default async function Profile() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }
  const theUser = await getUser(session?.user?.email as string);

  return (
    <section className="flex flex-col gap-6 pt-[5rem] pb-[12rem] md:px-36 ">
      {session?.user && <ProfileCard user={theUser} />}
      <div>
      <p className="text-smallFnt text-clrSecondaryGrey" >refresh the page to see the changes</p>
      </div>
    </section>
  );
}
