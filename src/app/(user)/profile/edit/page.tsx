import { options } from "@/app/api/auth/[...nextauth]/options";
import SignIn from "@/components/layout/credentialsEdit";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function EditProfile() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/play");
  }
  return (
    <div>
      <SignIn />
    </div>
  );
}
