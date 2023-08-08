import ProfileCard from "@/components/layout/profileCard";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
import { getUser, showUser } from "@/server/db/data/users/user";
import PlayersList from "@/components/layout/playersList";

export default async function Profile() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/play");
  }
  const theUser = await getUser(session?.user?.email as string);
  return (
    <section className="flex flex-wrap gap-20 pt-[10rem] w-full  justify-center pb-[12rem] md:px-24 ">
      <div className="w-full max-w-[36rem] ">
        <p className="md:text-largeFnt text-[2.3rem]  font-boldFnt text-center md:text-left mb-10">
          Profile information
        </p>
        <div>{session?.user && <ProfileCard user={theUser} />}</div>
      </div>

      <div className="w-full max-w-[30rem] ">
        <p className="md:text-largeFnt text-[2.3rem]  font-boldFnt text-center md:text-left mb-10">
          People you follow
        </p>
        {theUser?.following.length !== 0 ? (
          <PlayersList players={theUser?.following} />
        ) : (
          <div
            className="py-6 px-6 border border-1 cursor-pointer border-clrSecondaryGrey 
    flex  w-full items-center justify-center h-full max-h-[21.4rem] max-w-[30rem]
     rounded-2xl text-mediumFnt mb-4 gap-2"
          >
            No followings
          </div>
        )}
      </div>
    </section>
  );
}
