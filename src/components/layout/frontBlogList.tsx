"use client";

import useInfiniteScroll from "@/lib/hooks/scroll/infiniteScroll";
import { useEffect, useState } from "react";
import hasKey from "@/lib/utils/keyCheck";
import FrontBlog from "./frontBlog";
import Image from "next/image";
import { motion } from "framer-motion";
import { customAnimation } from "@/lib/hooks/animation/animations";
const FrontBlogsList = () => {
  const [cursor, setCursor] = useState("");
  const [blog, setBlog] = useState<any>([{}]);

  const { data, refetch, isFetching } = useInfiniteScroll(cursor);
  const { loadingAnimation } = customAnimation();
  useEffect(() => {
    if (data) {
      setCursor(data.nextId);
      setBlog((prev: any) => [...prev, ...data.posts]);
    }
  }, [data]);
  if (!data) {
    return (
      <div
        className="py-56  flex w-full h-full flex-col  items-center justify-center bg-header 
   "
      >
        <motion.div
          initial={loadingAnimation.initial}
          animate={loadingAnimation.inInitial}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          <Image alt="logo" src={"/Logo.svg"} width={60} height={60} priority />
        </motion.div>
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
