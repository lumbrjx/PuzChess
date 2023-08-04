"use client";
import Link from "next/link";
import BackBlog from "./backBlog";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import useInfiniteScroll from "@/lib/hooks/scroll/infiniteScroll";
import { useEffect, useState } from "react";
import hasKey from "@/lib/utils/keyCheck";
const BlogsList = () => {
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
    <div className="w-full flex items-start justify-center flex-wrap gap-4 ">
      {blog &&
        blog.map((blog: any, index: number) =>
          hasKey(blog, "author") ? (
            <div key={index}>
              <BackBlog
                author={blog.author}
                title={blog.title}
                body={blog.body}
                id={blog.id}
              />
            </div>
          ) : (
            ""
          )
        )}
      {data && <button onClick={refetch}>Load More</button>}
    </div>
  );
};

export default BlogsList;
