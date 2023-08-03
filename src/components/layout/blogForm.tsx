import React from "react";

const BlogForm = () => {
  return (
    <form action="" className="flex flex-col gap-2 w-full">
      <div className=" w-full flex flex-wrap gap-3 sm:gap-0 justify-between mb-1.5">
        <input
          className="py-3.5 px-6 bg-transparent w-full sm:w-[49%]  placeholder:text-clrSecondaryGrey rounded-formInput border-2
             border-clrSecondaryGrey focus:border-clrLayoutGreen 
             focus:outline-none"
          type="text"
          placeholder="Author"
          // onChange={(e) => (usernamee.current = e.target.value)}
          // {...register("username")}
        />
        <input
          className="py-3.5 px-6 bg-transparent w-full sm:w-[49%]  placeholder:text-clrSecondaryGrey rounded-formInput border-2
             border-clrSecondaryGrey focus:border-clrLayoutGreen 
             focus:outline-none"
          type="text"
          placeholder="Title"
          // onChange={(e) => (usernamee.current = e.target.value)}
          // {...register("username")}
        />
      </div>
      <div className="w-full">
        <textarea
          className="py-3.5 px-6 bg-transparent w-full o placeholder:text-clrSecondaryGrey rounded-formInput border-2
             border-clrSecondaryGrey resize-none focus:border-clrLayoutGreen h-[5rem] min-h-[5rem]
             focus:outline-none"
          placeholder="Title"

          // onChange={(e) => (usernamee.current = e.target.value)}
          // {...register("username")}
        />
      </div>
    </form>
  );
};

export default BlogForm;
