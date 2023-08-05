"use client";

import useInfiniteScroll from "@/lib/hooks/scroll/infiniteScroll";
import { useEffect, useState } from "react";
import hasKey from "@/lib/utils/keyCheck";
import FrontBlog from "./frontBlog";
import Image from "next/image";
const FrontBlogsList = () => {
  const [cursor, setCursor] = useState("");
  const [blog, setBlog] = useState<any>([{}]);

  const { data, refetch, isFetching } = useInfiniteScroll(cursor);
  useEffect(() => {
    if (data) {
      setCursor(data.nextId);
      setBlog((prev: any) => [...prev, ...data.posts]);
    }
  }, [data]);
  if (!data) {
    return (
      <div
        className="py-48 w-full h-full flex-col text-clrFont text-center items-center justify-center   z-50 top-0 bg-header px-2 md:ps-4 font-boldFnt text-bigFnt md:text-largeFnt 
  flex  
  -8 gap-8 "
      >
        <Image alt="logo" src={"/Logo.svg"} width={60} height={60} priority />
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-[1440px] grid  md:grid-cols-2  lg:grid-cols-3 gap-4 ">
        {blog &&
          blog.map((blog: any, index: number) =>
            hasKey(blog, "author") ? (
              <div key={index}>
                <FrontBlog
                  author={blog.author}
                  title={blog.title}
                  id={blog.id}
                />
              </div>
            ) : (
              ""
            )
          )}
      </div>
      {data && (
        <button onClick={refetch} disabled={isFetching}>
          {isFetching === true ? "Loading" : "Load More"}{" "}
        </button>
      )}
    </>
  );
};

export default FrontBlogsList;
