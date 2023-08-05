import { options } from "@/app/api/auth/[...nextauth]/options";
import BlogPost from "@/components/layout/BlogPost";
import UserCard from "@/components/layout/userCard";
import { getBlog } from "@/server/db/data/users/blog";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function User({ params }: { params: { aBlog: string } }) {
  // console.log(params.user.replace(/[0-9]|%20/g, " "));
  let theBlog;

  const blog = await getBlog(params?.aBlog);
  theBlog = blog;

  return (
    <div className="pt-[10rem] w-full flex justify-center  pb-[12rem] md:px-24  ">
      {/* <p>{thePlayer?.name}</p> */}
      <BlogPost blog={theBlog} />
    </div>
  );
}

export default User;
