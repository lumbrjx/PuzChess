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
    <div className="text-clrFont text-smallFnt flex justify-center pt-3 ">
      <div className="bg-signbg p-10 flex flex-col w-full max-w-[27.8rem] gap-12 items-center rounded-form ">
        <div className="w-full flex justify-center">
          <h2 className="font-boldFnt text-bigFnt">Sign in</h2>
        </div>
        <div className="w-full max-w-[26.5rem] flex flex-col gap-4">
          <div className="w-full max-w-[26.5rem] flex flex-col items-start gap-4">
            <p>Email</p>
            <input
              className=" w-full max-w-[26.5rem] py-3 px-5 bg-transparent  placeholder:text-clrSecondaryGrey rounded-formInput border-2
             border-clrSecondaryGrey focus:border-clrLayoutGreen 
             focus:outline-none"
              type="text"
              placeholder="example: name@email.com or username"
              onChange={(e) => (usernamee.current = e.target.value)}
            />
          </div>
          <div className="w-full max-w-[26.5rem] flex flex-col items-start gap-4">
            <div className="flex justify-between w-full">
              <p>Password</p>
              <p> forgot Password</p>
            </div>
            <input
              className=" w-full max-w-[26.5rem] font-boldFnt pt-4 py-3 px-5 bg-transparent placeholder:text-clrSecondaryGrey  rounded-formInput border-2
             border-clrSecondaryGrey focus:border-clrLayoutGreen 
             focus:outline-none"
              type="password"
              placeholder="type your pa******"
              onChange={(e) => (pass.current = e.target.value)}
            />
          </div>
        </div>
        <div className="w-full max-w-[26.5rem] flex justify-between gap-4">
          <Button
            additional="text-black rounded-formInput w-full"
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
            label="google"
            style="Grey"
            additional="rounded-formInput w-full"
          />
        </div>
      </div>

      {/* <div className=" w-full absolute md:static md:opacity-100 opacity-50 -z-10 -top-[17rem]    ">
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
      </div> */}
    </div>
  );
};

export default SignIn;
