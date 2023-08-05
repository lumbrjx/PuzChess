import BlogPost from "@/components/layout/BlogPost";

import { getBlog } from "@/server/db/data/users/blog";

async function aBlog({ params }: { params: { aBlog: string } }) {
  let theBlog;

  const blog = await getBlog(params?.aBlog);
  theBlog = blog;

  return (
    <div className="pt-[10rem] w-full flex justify-center  pb-[12rem] md:px-24  ">
      <BlogPost blog={theBlog} />
    </div>
  );
}

export default aBlog;
