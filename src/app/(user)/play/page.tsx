import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <section className="flex flex-col gap-6">
      <p>Page</p>
      {session?.user?.name}
    </section>
  );
}
