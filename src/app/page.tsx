import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default async function Home() {
  return (
    <div className="text-[2.3rem] leading-tight md:text-largeFnt text-center md:text-left md:pt-40 font-boldFnt text-clrFont pt-10 flex flex-col items-center w-full ">
      <div className="flex px-[6rem] w-full justify-between items-start mb-64 ">
        <div className="">
          <div className="px-3.5 mb-16 max-w-2xl">
            <h1 className="mb-3">
              Taking your <span className="text-clrLayoutGreen">chess</span>{" "}
              experience to another level
            </h1>
            <h2 className=" text-mediumF text-clrSecondaryGrey ">
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
      <div className="flex flex-col items-center mb-64  ">
        <div className="relative  max-w-[16.727rem] sm:max-w-[23.727rem] h-[10.57638rem] flex items-center w-full ps-4  mb-16">
          <div className="max-w-[10.65288rem]   sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute z-30 -top-[0rem] -right-[0rem] bg1 "></div>
          <div className="max-w-[10.65288rem]  sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute  z-20 top-[1.2rem] right-[2.5rem] bg2 "></div>
          <div className="max-w-[10.65288rem]   sm:max-w-[16.65288rem] w-full  h-[10.476rem] absolute  z-10 -bottom-[2.4rem] right-[5.4rem] bg3  "></div>
        </div>
        <div className="px-3.5 lg:px-[20rem] mb-16">
          <h2>
            Solve unlimited amount of puzzles depending on your skill level{" "}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center mb-64  ">
        <div className="relative  max-w-[10.727rem] sm:max-w-[23.727rem] sm:h-[14.57638rem] h-[10.57638rem] flex items-center w-full ps-4   mb-16">
          <div className="max-w-[6.65288rem]   sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute z-30 top-[3rem]  right-[0.4rem] sm:-right-[3.4rem] bg4 "></div>
          <div className="max-w-[6.65288rem]  sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute  z-20 top-[1.5rem] sm:right-[1.8rem] bg5 "></div>
          <div className="max-w-[6.65288rem]   sm:max-w-[16.65288rem] w-full  h-[10.476rem] absolute  z-10 top-[0rem] right-[1.8rem] sm:right-[0rem] bg6  "></div>
        </div>
        <div className="px-3.5 lg:px-[22rem] mb-16">
          <h2>Stay updated with latest articles and blogs about chess </h2>
        </div>
        <Link
          href={"/Blog"}
          className=" text-black bg-clrLayoutGreen shadow-btnDrop flex items-center gap-2 justify-center flex-wrap text-mediumFnt font-midFnt  py-1.5 px-5 rounded-regBtn"
        >
          Explore blogs
        </Link>
      </div>
      <div className="flex flex-col items-center mb-64 ">
        <div className="flex justify-center ps-24">
          <Image
            alt="arrow"
            src={"/Slide.svg"}
            quality={100}
            priority
            width={300}
            height={350}
          />{" "}
        </div>
        <div className="px-3.5 lg:px-[20rem] mb-16">
          <h2>
            Find your way to the top of the leaderboard and earn various budges!
          </h2>
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
        <div className="px-3.5 lg:px-[20rem] mb-16">
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
