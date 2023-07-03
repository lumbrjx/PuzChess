"use client";

import Button from "@/components/ui/button";
import PageLogo from "@/components/ui/pageLogo";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useRef } from "react";

const SignIn = () => {
  const usernamee = useRef("");
  const pass = useRef("");
  const { data: session } = useSession();
  return (
    <div
      className="bg-signbg w-full text-clrFont  md:ps-4 font-lightFnt 
     flex flex-col md:flex-row h-full 
     -8 gap-8 absolute z-50 top-0"
    >
      <div className=" w-full flex flex-col gap-6 items-center py-10 ">
        <PageLogo />
        <h2 className="text-bigFnt">Sign in</h2>
        <div className="flex flex-col gap-3 text-smallFnt text-clrFont w-full max-w-[26.5rem] ">
          <input
            className="py-3.5 px-6 bg-transparent  placeholder:text-clrSecondaryGrey rounded-regBtn border-2
             border-clrSecondaryGrey focus:border-clrLayoutGreen 
             focus:outline-none"
            type="text"
            placeholder="username"
            onChange={(e) => (usernamee.current = e.target.value)}
          />
          <input
            className="py-3.5 px-6 bg-transparent placeholder:text-clrSecondaryGrey  rounded-regBtn border-2
             border-clrSecondaryGrey focus:border-clrLayoutGreen 
             focus:outline-none"
            type="text"
            placeholder="password"
            onChange={(e) => (pass.current = e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3  w-full max-w-[26.5rem] mt-6">
          <Button
            additional="w-full max-w-[26.5rem]"
            label="Sign in"
            style="Green"
            onClick={() =>
              signIn("credentials", {
                username: usernamee.current,
                password: pass.current,
                redirect: true,
                callbackUrl: "/",
              })
            }
          />
          <Button
            label=" continue with google"
            style="Grey"
            additional="w-full max-w-[26.5rem]  "
          />
        </div>
        <div className="flex w-full max-w-[26.5rem] justify-between text-clrSecondaryGrey mb-12 ">
          <Link href={"/"}>back to home</Link>
          <Link href={"/auth/signup"}>create new account</Link>
        </div>
      </div>
      <div className=" w-full absolute md:static md:opacity-100 opacity-50 -z-10 -top-[17rem]    ">
        <div className="w-full max-w-10 h-full  max-h-10 flex justify-end items-center mt-[16rem]">
          <Image
            alt="signinBg"
            src={"/inBg.png"}
            // sizes="10vw"
            width={400}
            height={400}
            // fill={true}
            // Make the image display full width
            style={{
              position: "static",
            }}
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
