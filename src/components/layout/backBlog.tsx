"use client";
import Button from "../ui/button";
import "../../app/(admin)/dashboard/blogs/blog.css";
import { useDelBlog } from "@/lib/hooks/mutate/delBlog";
type BlogType = {
  id: string;
  author: string;
  title: string;
};
const BackBlog = ({ author, title, id }: BlogType) => {
  const { mutate } = useDelBlog();
  return (
    <div
      className="py-4 px-6 border border-1 h-full min-h-[12rem]   border-clrSecondaryGrey 
    flex flex-col w-full items-between max-w-[30rem]
     rounded-2xl text-mediumFnt mb-4 gap-8"
    >
      <div className="flex flex-col  gap-2 h-full w-full justify-between">
        <div className="flex w-full flex-col">
          <p className=" text-mediumF ">{title}</p>

          <p className="text-mediumF font-lightFnt underline text-clrSecondaryGrey">
            {author}
          </p>
        </div>
        <div className="">
          <Button
            label="Delete"
            style="Transparent"
            additional="text-smallFnt rounded-formInput w-full max-w-[7rem]"
            onClick={() => mutate({ id: id })}
          />
        </div>
      </div>
    </div>
  );
};

export default BackBlog;
