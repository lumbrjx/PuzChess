import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);
  if (session) {
    redirect("/play");
  }

  return (
    <div className="text-[2.3rem] leading-tight md:text-largeFnt text-center lg:text-left md:pt-40 font-boldFnt text-clrFont pt-10 flex flex-col items-center w-full ">
      <div className="  flex px-2 md:ps-6 lg:px-[6rem] lg:pe-[2rem]  w-full md:justify-center md:gap-48 items-center flex-col-reverse lg:flex-row lg:items-start mb-64 ">
        <div className=" pt-16 flex flex-col items-center lg:items-start ">
          <div className=" mb-16 max-w-2xl">
            <h1 className="mb-3">
              Taking your <span className="text-clrLayoutGreen">chess</span>{" "}
              experience to another level
            </h1>
            <h2 className=" text-mediumF font-midFnt ">
              Try ChessPuzz and compete with numerous players around the world!
            </h2>
          </div>
          <Link
            href={"/auth/signin"}
            className="w-full max-w-[7.5rem] text-black bg-clrLayoutGreen shadow-btnDrop flex items-center gap-2 justify-center flex-wrap text-mediumFnt font-midFnt  py-1.5 px-5 rounded-regBtn"
          >
            Play now
          </Link>
        </div>
        <div className="">
          <Image
            alt="dice"
            src={"/dice.svg"}
            quality={100}
            priority
            width={350}
            height={350}
          />{" "}
        </div>
      </div>
      <div className="flex px-2 md:ps-6 lg:px-[6rem] w-full flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-48 lg:items-start   mb-64  ">
        <div className=" mb-16 pt-1 md:pt-12 max-w-2xl ">
          <h2 className="mb-3">Sharpen your skills</h2>
          <h2 className=" text-mediumF font-midFnt mb-3 ">
            Solve unlimited amount of puzzles depending on your skill level
          </h2>
          <h3 className="text-mediumFnt font-lightFnt text-clrSecondaryGrey">
            3M+ puzzle from different level
          </h3>
        </div>
        <div className=" relative  max-w-[16.727rem] sm:max-w-[23.727rem] h-[10.57638rem] flex items-center w-full ps-4  mb-16">
          <div className="max-w-[10.65288rem]   sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute z-30 -top-[0rem] -right-[0rem] bg1 "></div>
          <div className="max-w-[10.65288rem]  sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute  z-20 top-[1.2rem] right-[2.5rem] bg2 "></div>
          <div className="max-w-[10.65288rem]   sm:max-w-[16.65288rem] w-full  h-[10.476rem] absolute  z-10 -bottom-[2.4rem] right-[5.4rem] bg3  "></div>
        </div>
      </div>
      <div className="flex justify-between px-2  lg:px-[6rem] w-full flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-48 lg:items-start   mb-64 ">
        <div className=" flex flex-col items-center lg:items-start">
          <div className=" mb-16 max-w-2xl">
            <h1 className="mb-3">On the edge!</h1>
            <h2 className=" text-mediumF font-midFnt ">
              Stay updated with latest articles and blogs about chess,Explore
              strategies, tactics, and masterful moves that impress
            </h2>
          </div>
          <Link
            href={"/Blog"}
            className=" w-full max-w-[10.5rem] text-black bg-clrLayoutGreen shadow-btnDrop flex-wrap flex items-center gap-2 justify-center  text-mediumFnt font-midFnt  py-1.5 px-5 rounded-regBtn"
          >
            Explore blogs
          </Link>
        </div>
        <div className="relative  max-w-[10.727rem] sm:max-w-[23.727rem] sm:h-[14.57638rem] h-[10.57638rem] flex items-center w-full ps-4   mb-16">
          <div className="max-w-[6.65288rem]   sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute z-30 top-[3rem]  right-[0.4rem] sm:-right-[3.4rem] bg4 "></div>
          <div className="max-w-[6.65288rem]  sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute  z-20 top-[1.5rem] sm:right-[1.8rem] bg5 "></div>
          <div className="max-w-[6.65288rem]   sm:max-w-[16.65288rem] w-full  h-[10.476rem] absolute  z-10 top-[0rem] right-[1.8rem] sm:right-[0rem] bg6  "></div>
        </div>
      </div>
      <div className=" mb-36 md:pe-[2rem] flex justify-between text-center lg:text-left px-2 lg:px-[6rem] w-full flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-48 lg:items-start   ">
        <div className=" mb-16 pt-12 max-w-2xl ">
          <h2 className="mb-3">Dive in</h2>
          <h2 className=" text-mediumF font-midFnt mb-3 ">
            Find your way to the top of the leaderboard and earn various budges,
            Sharpen your skills, learn from grandmasters profound insights!
          </h2>
          <h3 className="text-mediumFnt font-lightFnt text-clrSecondaryGrey">
            Join our{" "}
            <a href="#discord" className="underline">
              discord
            </a>{" "}
            community passionate about the game, day and night.
          </h3>
        </div>
        <div className="lg:block hidden">
          <Image
            alt="arrow"
            src={"/Slide.svg"}
            quality={100}
            priority
            width={350}
            height={350}
          />{" "}
        </div>
      </div>
      <div className="flex flex-col items-center mb-64 ">
        <div>
          <Image
            alt="LogoGreen"
            src={"/logoGreen.svg"}
            quality={100}
            priority
            width={350}
            height={350}
          />{" "}
        </div>
        <div className="px-3.5 text-center lg:px-[20rem] mb-16">
          <h2>What are you waiting for? Join PuzChess now </h2>
        </div>
        <Link
          href={"/auth/signin"}
          className=" text-black bg-clrLayoutGreen shadow-btnDrop flex items-center gap-2 justify-center flex-wrap text-mediumFnt font-midFnt  py-1.5 px-5 rounded-regBtn"
        >
          Play now
        </Link>
      </div>
    </div>
  );
}
