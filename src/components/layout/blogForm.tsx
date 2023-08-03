"use client";

import { blogForm, blogSchema } from "@/schemas/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/button";
import { useAddBlog } from "@/lib/hooks/mutate/addBlog";

const BlogForm = () => {
  const { mutate, isSuccess } = useAddBlog();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<blogSchema>({
    resolver: zodResolver(blogForm),
  });
  const submitForm = (data: blogSchema) => {
    console.log(data);
    mutate(data);
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex px-2 flex-col gap-2 w-full"
    >
      <div className="  w-full flex flex-wrap gap-3 sm:gap-0 justify-between mb-1.5">
        <input
          className="py-3.5 px-6 bg-transparent w-full sm:w-[49%]  placeholder:text-clrSecondaryGrey rounded-formInput border-2
             border-clrSecondaryGrey focus:border-clrLayoutGreen 
             focus:outline-none"
          type="text"
          placeholder="Author"
          // onChange={(e) => (usernamee.current = e.target.value)}
          {...register("author")}
        />
        <input
          className="py-3.5 px-6 bg-transparent w-full sm:w-[49%]  placeholder:text-clrSecondaryGrey rounded-formInput border-2
             border-clrSecondaryGrey focus:border-clrLayoutGreen 
             focus:outline-none"
          type="text"
          placeholder="Title"
          // onChange={(e) => (usernamee.current = e.target.value)}
          {...register("title")}
        />
      </div>
      <div className="w-full">
        <textarea
          className="py-3.5 px-6 bg-transparent w-full o placeholder:text-clrSecondaryGrey rounded-formInput border-2
             border-clrSecondaryGrey  focus:border-clrLayoutGreen 
             focus:outline-none"
          placeholder="Title"
          // onChange={(e) => (usernamee.current = e.target.value)}
          {...register("body")}
        />
      </div>
      <div className="flex w-full flex-col lg:flex-row justify-center lg:justify-between items-center">
        <Button
          label="submit"
          style="Transparent"
          additional="text-smallFnt rounded-regBtn w-full max-w-[7rem]"
        />

        {errors.author && (
          <span className="text-red-400">{errors.author.message}</span>
        )}
        {errors.title && (
          <span className="text-red-400">{errors.title.message}</span>
        )}
        {errors.body && (
          <span className="text-red-400">{errors.body.message}</span>
        )}
        {isSuccess && <span className="text-green-400">Blog added!</span>}
      </div>
    </form>
  );
};

export default BlogForm;
