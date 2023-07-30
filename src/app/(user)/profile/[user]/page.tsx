import { options } from "@/app/api/auth/[...nextauth]/options";
import { showUser } from "@/server/db/data/users/user";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function User({ params }: { params: { user: string }; user: any }) {
  // console.log(params.user.replace(/[0-9]|%20/g, " "));
  let thePlayer;
  const session = await getServerSession(options);
  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }
  if (session) {
    const player = await showUser(params?.user);
    thePlayer = player;
  }
  console.log("player", thePlayer);
  return (
    <div className="pt-80 text-bigFnt text-white ">
      <p>{thePlayer?.name}</p>
    </div>
  );
}

export default User;
