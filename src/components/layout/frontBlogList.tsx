"use client";
import Link from "next/link";
import BackBlog from "./backBlog";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import useInfiniteScroll from "@/lib/hooks/scroll/infiniteScroll";
import { useEffect, useState } from "react";
import hasKey from "@/lib/utils/keyCheck";
import FrontBlog from "./frontBlog";
const FrontBlogsList = () => {
  const [cursor, setCursor] = useState("");
  const [blog, setBlog] = useState<any>([{}]);

  const { data, refetch } = useInfiniteScroll(cursor);
  useEffect(() => {
    if (data) {
      setCursor(data.nextId);
      setBlog((prev: any) => [...prev, ...data.posts]);
    }
  }, [data]);
  if (!data) {
    return <div>Loading...</div>;
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
      {data && <button onClick={refetch}>Load More</button>}
    </>
  );
};

export default FrontBlogsList;
