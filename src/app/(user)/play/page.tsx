import ProfileCard from "@/components/layout/profileCard";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
import GameSession from "@/components/layout/gameSession";
import { getUserName } from "@/server/db/data/users/user";
import { form } from "@/schemas/forms";

export default async function Page() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/play");
  }
  const user = await getUserName(session?.user?.email);
  let username = user?.name;
  try {
    await form.parse({ username });
  } catch (error) {
    redirect("/profile/edit?callbackUrl=/play");
  }

  return (
    <section className="flex flex-col gap-6">
      <GameSession />
    </section>
  );
}
