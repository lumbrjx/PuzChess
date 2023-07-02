"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Play = () => {
  // const { data: session } = useSession();
  // if (session) {
  return <div>play</div>;
  // } else {
  // redirect("auth/signin?callbackUrl=/play");
  // }
};

export default Play;
