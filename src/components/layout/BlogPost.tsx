const BlogPost = ({ blog }: any) => {
  return (
    <div className="flex flex-col w-full max-w-[57rem] gap-3">
      <div className="w-full text-mediumF md:text-bigFnt justify-between flex-wrap flex font-midFnt gap-7 items-center p-10 rounded-form bg-signbg">
        <p>{blog?.title}</p>
        <p className="font-lightFnt text-mediumF  ">By: {blog?.author}</p>
      </div>
      <div className="w-full text-left text-mediumFnt font-lightFnt p-10 rounded-form bg-signbg">
        <p>{blog?.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
