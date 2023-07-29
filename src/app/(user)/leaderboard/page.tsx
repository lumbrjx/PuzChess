import PlayerCard from "@/components/layout/playerCard";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
import PlayersList from "@/components/layout/playersList";
import { getPlayers } from "@/server/db/data/users/user";

export default async function Leaderboard() {
  const session = await getServerSession(options);
  let topPlayerss;
  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }
  if (session) {
    const topPlayers = await getPlayers();
    topPlayerss = topPlayers;
  }

  return (
    <section className="py-28 flex flex-col   px-4  lg:px-40  w-full">
      <p className="md:text-largeFnt text-[2.3rem]  font-boldFnt text-center md:text-left mb-10">
        Leaderboard
      </p>
      <div className="w-full flex justify-center md:justify-start">
        <PlayersList players={topPlayerss} />
      </div>
    </section>
  );
}
