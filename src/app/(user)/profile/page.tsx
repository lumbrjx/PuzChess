import ProfileCard from "@/components/layout/profileCard";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
import { getUser } from "@/server/db/data/users/user";
enum budges {
  "ROCKIE",
  "SILVER",
  "GOLDEN",
  "DIAMOND",
  "PLATINIUM",
}
type fetchedUser = {
  name: string;
  badge: budges;
  chessElo: number | null;
  email: string | null;
  image: string | null;
};
export default async function Profile() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }
  // if (session) {
  const theUser = await getUser(session?.user?.email as string);
  console.log(theUser);
  // return theUser;
  // }

  return (
    <section className="flex flex-col gap-6">
      {session?.user && <ProfileCard user={theUser} />}
    </section>
  );
}
