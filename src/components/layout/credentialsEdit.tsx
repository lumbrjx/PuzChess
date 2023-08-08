"use client";

import Button from "@/components/ui/button";

import { formReg, formSchema } from "@/schemas/forms";
import { redirect, useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "@/lib/hooks/mutate/updateProfile";
import { useSession } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { mutate, isSuccess } = useUpdateUser(session?.user?.email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>({
    resolver: zodResolver(formReg),
  });
  const submitForm = (data: formSchema) => {
    mutate(data);
     isSuccess && redirect("/play");
    
  };

  return (
    <div
      className="py-36 w-full text-clrFont items-center justify-center  absolute z-50 top-0 bg-header md:ps-4 font-lightFnt 
     flex flex-col md:flex-row  
     -8 gap-8 "
    >
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full max-w-[27.8rem] flex flex-col gap-7 items-center p-10 rounded-form bg-signbg"
      >
        <h2 className="font-boldFnt text-mediumF">Setup your profile!</h2>
        <div className="flex flex-wrap gap-3 text-smallFnt text-clrFont w-full  ">
          <input
            className="py-3.5 px-6 bg-transparent w-full sm:w-auto placeholder:text-clrSecondaryGrey rounded-formInput border-2
             border-clrSecondaryGrey focus:border-clrLayoutGreen 
             focus:outline-none"
            type="text"
            placeholder="Username"
            {...register("username")}
          />
          <input
            className="py-3.5 px-6 bg-transparent placeholder:text-clrSecondaryGrey w-full sm:max-w-[8rem] rounded-formInput border-2
             border-clrSecondaryGrey focus:border-clrLayoutGreen 
             focus:outline-none"
            type="text"
            placeholder="Chess elo"
            {...register("chessElo")}
          />
        </div>
        <div className="flex flex-col gap-3 items-center w-full max-w-[26.5rem] mt-3">
          {errors.username && (
            <span className="text-red-400">{errors.username.message}</span>
          )}
          {errors.chessElo && (
            <span className="text-red-400">{errors.chessElo.message}</span>
          )}
          <Button
            label=" Continue"
            style="Grey"
            additional="rounded-formInput w-full border-none  text-black bg-white "
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
