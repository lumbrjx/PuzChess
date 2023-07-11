"use client";

import Button from "@/components/ui/button";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

const SignIn = () => {
  const { data: session } = useSession();
  return (
    <div className="text-clrFont text-smallFnt pt-[8rem] pb-[12rem]">
      <div className="bg-signbg p-10 flex m-auto flex-col w-full max-w-[27.8rem] gap-8 items-center rounded-form ">
        <div className="w-full flex justify-center">
          <h2 className="font-boldFnt text-mediumF">Sign in</h2>
        </div>
        <div className="w-full max-w-[26.5rem] flex flex-col gap-4 items-center mb-5 text-clrSecondaryGrey">
          <p className="text-center">
            For our users safety we do not provide the credentials sign in. see
            why {session?.user?.name}
            <a href="/FAQ" className="underline">
              here
            </a>
          </p>
        </div>
        <div className="w-full max-w-[26.5rem] flex justify-between gap-4">
          <Button
            label="Sign in"
            style="Grey"
            asset={true}
            asset_type="Google"
            additional="rounded-formInput w-full border-none  text-black bg-white"
            onClick={() =>
              signIn("google", { redirect: true, callbackUrl: "/" })
            }
          />
        </div>
      </div>

      <div className=" w-full absolute   opacity-50 -z-10 lg:-top-[1rem] -top-[10.5rem]    ">
        <div className="w-full max-w-10 h-full  max-h-10 flex justify-end items-center mt-[16rem]">
          <Image
            alt="signinBg"
            src={"/inBg.svg"}
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
