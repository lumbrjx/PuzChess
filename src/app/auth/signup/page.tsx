"use client";
import { form, formSchema } from "../../../schemas/forms";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>({
    resolver: zodResolver(form),
  });
  const submitForm = (data: formSchema) => {
    console.log("yesss", data);
  };
  return (
    <div className="text-clrFont text-smallFnt py-[4rem]">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="bg-signbg p-10 flex m-auto flex-col w-full max-w-[27.8rem] gap-8 items-center rounded-form "
      >
        <div className="w-full flex justify-center">
          <h2 className="font-boldFnt text-mediumF">Sign up</h2>
        </div>
        <div className="w-full max-w-[26.5rem] flex flex-col gap-4">
          <div className="w-full max-w-[26.5rem] flex flex-col items-start gap-4">
            <p>Username</p>

            <input
              className={`  ${
                errors.username && "border-red-400"
              }  focus:border-clrLayoutGreen w-full max-w-[26.5rem] py-3 px-5 bg-transparent outline-none placeholder:text-clrSecondaryGrey rounded-formInput border-2
             border-clrSecondaryGrey  
             focus:outline-none"`}
              type="text"
              placeholder="example: hekaruclone"
              // onChange={(e) => (usernamee.current = e.target.value)}
              {...register("username")}
            />
            {errors.username && (
              <span className="text-red-400">{errors.username.message}</span>
            )}
          </div>

          <div className="w-full max-w-[26.5rem] flex flex-col items-start gap-4">
            <p>Email</p>
            <input
              className={`  ${
                errors.email && "border-red-400"
              }  focus:border-clrLayoutGreen w-full max-w-[26.5rem] py-3 px-5 bg-transparent outline-none placeholder:text-clrSecondaryGrey rounded-formInput border-2
             border-clrSecondaryGrey  
             focus:outline-none"`}
              type="text"
              placeholder="example: name@email.com or username"
              // onChange={(e) => (emaill.current = e.target.value)}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-400">{errors.email.message}</span>
            )}
          </div>
          <div className="w-full max-w-[26.5rem] flex flex-col items-start gap-4">
            <p>Password</p>
            <input
              className={`  ${
                errors.password && "border-red-400"
              }  focus:border-clrLayoutGreen w-full max-w-[26.5rem]  pt-4 py-3 px-5 bg-transparent placeholder:text-clrSecondaryGrey outline-none rounded-formInput border-2
             border-clrSecondaryGrey  
             focus:outline-clrLayoutGreen"`}
              type="password"
              placeholder="type your pa******"
              // onChange={(e) => (pass.current = e.target.value)}
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-400">{errors.password.message}</span>
            )}
          </div>
          <div className="w-full max-w-[26.5rem] flex flex-col items-start gap-4">
            <div className="flex justify-between w-full">
              <p>Confirm password</p>
            </div>
            <input
              className={`  ${
                errors.confirmPassword && "border-red-400"
              }  focus:border-clrLayoutGreen w-full max-w-[26.5rem] outline-none pt-4 py-3 px-5 bg-transparent placeholder:text-clrSecondaryGrey  rounded-formInput border-2
             border-clrSecondaryGrey  
             focus:outline-none"`}
              type="password"
              placeholder="type your pa******"
              // onChange={(e) => (pass.current = e.target.value)}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-red-400">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>
        <div className="w-full max-w-[26.5rem] flex justify-between gap-4">
          <Button
            additional="text-black rounded-formInput w-full"
            label="Sign up"
            style="Green"
            onClick={() => console.log("hello")}
          />
          <Button
            label="Sign up"
            style="Grey"
            asset={true}
            asset_type="Google"
            additional="rounded-formInput w-full border-none  text-black bg-white"
          />
        </div>
        <div className="flex">
          <span className="text-clrSecondaryGrey">
            Already have an account ?{" "}
            <Link href={"/auth/signin"} className="underline ">
              Sign in
            </Link>
          </span>
        </div>
      </form>

      <div className="  absolute   opacity-50 -z-10 lg:-top-[1rem] -top-[10.5rem] left-0 ">
        <div className="w-full max-w-10 h-full  max-h-10 flex justify-end items-center mt-[16rem]">
          <Image
            alt="signinBg"
            src={"/upBg.png"}
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

export default SignUp;
