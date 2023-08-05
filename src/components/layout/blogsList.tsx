"use client";

import BackBlog from "./backBlog";

import useInfiniteScroll from "@/lib/hooks/scroll/infiniteScroll";
import { useEffect, useState } from "react";
import hasKey from "@/lib/utils/keyCheck";
import Image from "next/image";
const BlogsList = () => {
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
      <div className="w-full  grid max-w-[1440px] md:grid-cols-2  lg:grid-cols-3 gap-4 mb-4">
        {blog &&
          blog.map((blog: any, index: number) =>
            hasKey(blog, "author") ? (
              <div key={index}>
                <BackBlog
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
        <button onClick={refetch} disabled={isFetching} className="mt-6">
          {isFetching === true ? "Loading" : "Load More"}{" "}
        </button>
      )}
    </>
  );
};

export default BlogsList;
