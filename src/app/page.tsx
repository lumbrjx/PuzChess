import Button from "@/components/ui/button";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  return <h1>hello</h1>;
}
