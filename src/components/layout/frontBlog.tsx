"use client";
import Button from "../ui/button";
import Link from "next/link";
import "../../app/(admin)/dashboard/blogs/blog.css";

type BlogType = {
  id: string;
  author: string;
  title: string;
};
const FrontBlog = ({ author, title, id }: BlogType) => {
  return (
    <Link
      href={`/Blog/${id}`}
      className="py-4 px-6 border border-1 h-full min-h-[12rem]   border-clrSecondaryGrey 
    flex flex-col w-full items-between max-w-[30rem]
     rounded-2xl text-mediumFnt mb-4 gap-8"
    >
      <div className="flex flex-col  gap-2 h-full w-full ">
        <p className=" text-mediumF font-midFnt h-full ">{title}</p>

        <p className=" font-lightFnt">By {author}</p>
      </div>
    </Link>
  );
};

export default FrontBlog;
