"use client";
import Button from "../ui/button";
import "../../app/(admin)/dashboard/blogs/blog.css";
import { useDelBlog } from "@/lib/hooks/mutate/delBlog";
type BlogType = {
  id: string;
  author: string;
  title: string;
  body: string;
};
const BackBlog = ({ author, title, body, id }: BlogType) => {
  const { mutate } = useDelBlog();
  return (
    <div
      className="py-6 px-6 border border-1   border-clrSecondaryGrey 
    flex flex-wrap w-full justify-between max-w-[30rem]
     rounded-2xl text-mediumFnt mb-4 gap-8"
    >
      <div className="flex gap-4 items-center justify-between w-full  flex-wrap">
        <p className="text-mediumF ">{title}</p>

        <p className="text-mediumF font-lightFnt underline text-clrSecondaryGrey">
          {author}
        </p>
        <div>
          <Button
            label="Delete"
            style="Transparent"
            additional="text-smallFnt rounded-regBtn w-full max-w-[7rem]"
            onClick={() => mutate({ id: id })}
          />
        </div>
      </div>
    </div>
  );
};

export default BackBlog;
