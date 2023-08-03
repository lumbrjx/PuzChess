"use client";
import Link from "next/link";
import BackBlog from "./backBlog";
type BlogsType = {
  blogs:
    | {
        id: string;
        author: string;
        title: string;
        body: string;
      }[]
    | undefined;
};

const BlogsList = ({ blogs }: BlogsType) => {
  return (
    <div className="w-full flex items-start justify-center flex-wrap gap-4 ">
      {blogs?.map((blog, index: number) => (
        <div key={index}>
          <BackBlog
            author={blog.author}
            title={blog.title}
            body={blog.body}
            id={blog.id}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
