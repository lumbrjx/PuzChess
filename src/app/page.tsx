"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import { redirect } from "next/navigation";
import { motion } from "framer-motion";

import { useSession } from "next-auth/react";
import { customAnimation } from "@/lib/hooks/animation/animations";

const Home = () => {
  const { data: session } = useSession();
  if (session) {
    redirect("/play");
  }
  const { HeroAnimation, sectionAnimation, section2Animation } =
    customAnimation();

  return (
    <div className="text-[2.3rem] leading-tight md:text-largeFnt text-center lg:text-left md:pt-40 font-boldFnt text-clrFont pt-10 flex flex-col items-center w-full ">
      <div className="flex  md:ps-6 lg:px-[6rem] w-full flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-56 lg:items-start   mb-64   ">
        <div className=" pt-16 flex flex-col items-center lg:items-start ">
          <div className=" mb-16 max-w-2xl">
            <motion.h1
              initial={HeroAnimation.initial}
              animate={HeroAnimation.inInitial}
              transition={{ duration: 0.8 }}
              className="mb-3"
            >
              Taking your <span className="text-clrLayoutGreen">chess</span>{" "}
              experience to another level
            </motion.h1>
            <motion.h2
              initial={HeroAnimation.initial}
              animate={HeroAnimation.inInitial}
              transition={{ duration: 0.8, delay: 0.5 }}
              className=" text-mediumF font-midFnt "
            >
              Try ChessPuzz and compete with numerous players around the world!
            </motion.h2>
          </div>
          <motion.div
            initial={HeroAnimation.initial}
            animate={HeroAnimation.inInitial}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              href={"/auth/signin"}
              className="w-full max-w-[7.5rem] hover:shadow-none  text-black bg-clrLayoutGreen shadow-btnDrop flex items-center gap-2 justify-center flex-wrap text-mediumFnt font-midFnt  py-1.5 px-5 rounded-regBtn"
            >
              Play now
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={HeroAnimation.initial}
          animate={HeroAnimation.inInitial}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            alt="dice"
            src={"/dice.svg"}
            quality={100}
            priority
            width={350}
            height={350}
          />{" "}
        </motion.div>
      </div>
      <div className="flex px-2 md:ps-6 lg:px-[6rem] w-full flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-48 lg:items-start   mb-64  ">
        <div className=" mb-16 pt-1 md:pt-12 max-w-2xl ">
          <motion.h2
            initial={HeroAnimation.initial}
            viewport={{ once: true }}
            whileInView={HeroAnimation.inInitial}
            transition={{ duration: 0.8 }}
            className="mb-3"
          >
            Sharpen your skills
          </motion.h2>
          <motion.h2
            initial={HeroAnimation.initial}
            viewport={{ once: true }}
            whileInView={HeroAnimation.inInitial}
            transition={{ duration: 0.8, delay: 0.5 }}
            className=" text-mediumF font-midFnt mb-3 "
          >
            Solve unlimited amount of puzzles depending on your skill level
          </motion.h2>
          <motion.h3
            initial={HeroAnimation.initial}
            whileInView={HeroAnimation.inInitial}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-mediumFnt font-lightFnt text-clrSecondaryGrey"
          >
            3M+ puzzle from different level
          </motion.h3>
        </div>
        <div className=" relative  max-w-[16.727rem] sm:max-w-[23.727rem] h-[10.57638rem] flex items-center w-full ps-4  mb-16">
          <motion.div
            initial={sectionAnimation.initial}
            viewport={{ once: true }}
            whileInView={sectionAnimation.inInitial}
            transition={{ duration: 0.8 }}
            className="max-w-[10.65288rem]   sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute z-30 -top-[0rem] -right-[0rem] bg1 "
          ></motion.div>
          <motion.div
            initial={sectionAnimation.initial}
            viewport={{ once: true }}
            whileInView={sectionAnimation.inInitial}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[10.65288rem]  sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute  z-20 top-[1.2rem] right-[2.5rem] bg2 "
          ></motion.div>
          <motion.div
            initial={sectionAnimation.initial}
            viewport={{ once: true }}
            whileInView={sectionAnimation.inInitial}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[10.65288rem]   sm:max-w-[16.65288rem] w-full  h-[10.476rem] absolute  z-10 -bottom-[2.4rem] right-[5.4rem] bg3  "
          ></motion.div>
        </div>
      </div>
      <div className="flex justify-between px-2  lg:px-[6rem] w-full flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-48 lg:items-start   mb-64 ">
        <div className=" flex flex-col items-center lg:items-start">
          <div className=" mb-16 max-w-2xl">
            <motion.h1
              initial={HeroAnimation.initial}
              viewport={{ once: true }}
              whileInView={HeroAnimation.inInitial}
              transition={{ duration: 0.8 }}
              className="mb-3"
            >
              On the edge!
            </motion.h1>
            <motion.h2
              initial={HeroAnimation.initial}
              viewport={{ once: true }}
              whileInView={HeroAnimation.inInitial}
              transition={{ duration: 0.8, delay: 0.5 }}
              className=" text-mediumF font-midFnt "
            >
              Stay updated with latest articles and blogs about chess,Explore
              strategies, tactics, and masterful moves that impress
            </motion.h2>
          </div>
          <motion.div
            initial={HeroAnimation.initial}
            viewport={{ once: true }}
            whileInView={HeroAnimation.inInitial}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              href={"/Blog"}
              className=" w-full max-w-[10.5rem] hover:shadow-none text-black bg-clrLayoutGreen shadow-btnDrop flex-wrap flex items-center gap-2 justify-center  text-mediumFnt font-midFnt  py-1.5 px-5 rounded-regBtn"
            >
              Explore blogs
            </Link>
          </motion.div>
        </div>
        <div className="relative  max-w-[10.727rem] sm:max-w-[23.727rem] sm:h-[14.57638rem] h-[10.57638rem] flex items-center w-full ps-4   mb-16">
          <motion.div
            initial={section2Animation.initial}
            viewport={{ once: true }}
            whileInView={section2Animation.inInitial1}
            transition={{ duration: 0.8 }}
            className="max-w-[6.65288rem]   sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute z-30 top-[3rem]  right-[0.4rem] sm:-right-[3.4rem] bg4 "
          ></motion.div>
          <motion.div
            initial={section2Animation.initial2}
            viewport={{ once: true }}
            whileInView={section2Animation.inInitial2}
            transition={{ duration: 0.8 }}
            className="max-w-[6.65288rem]  sm:max-w-[16.65288rem] h-[10.476rem]  w-full absolute  z-20 top-[1.5rem] sm:right-[1.8rem] bg5 "
          ></motion.div>
          <motion.div
            initial={section2Animation.initial3}
            viewport={{ once: true }}
            whileInView={section2Animation.inInitial3}
            transition={{ duration: 0.8 }}
            className="max-w-[6.65288rem]   sm:max-w-[16.65288rem] w-full  h-[10.476rem] absolute  z-10 top-[0rem] right-[1.8rem] sm:right-[0rem] bg6  "
          ></motion.div>
        </div>
      </div>
      <div className=" mb-36 md:pe-[2rem] flex justify-between text-center lg:text-left px-2 lg:px-[6rem] w-full flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-48 lg:items-start   ">
        <div className=" mb-16 pt-12 max-w-2xl ">
          <motion.h2
            initial={HeroAnimation.initial}
            viewport={{ once: true }}
            whileInView={HeroAnimation.inInitial}
            transition={{ duration: 0.8 }}
            className="mb-3"
          >
            Dive in
          </motion.h2>
          <motion.h2
            initial={HeroAnimation.initial}
            viewport={{ once: true }}
            whileInView={HeroAnimation.inInitial}
            transition={{ duration: 0.8, delay: 0.5 }}
            className=" text-mediumF font-midFnt mb-3 "
          >
            Find your way to the top of the leaderboard and earn various budges,
            Sharpen your skills, learn from grandmasters profound insights!
          </motion.h2>
          <motion.h3
            initial={HeroAnimation.initial}
            viewport={{ once: true }}
            whileInView={HeroAnimation.inInitial}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-mediumFnt font-lightFnt text-clrSecondaryGrey"
          >
            Join our{" "}
            <a href="#discord" className="underline">
              discord
            </a>{" "}
            community passionate about the game, day and night.
          </motion.h3>
        </div>
        <motion.div
          initial={HeroAnimation.initial}
          viewport={{ once: true }}
          whileInView={HeroAnimation.inInitial}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:block hidden"
        >
          <Image
            alt="arrow"
            src={"/Slide.svg"}
            quality={100}
            priority
            width={350}
            height={350}
          />{" "}
        </motion.div>
      </div>
      <motion.div
        initial={HeroAnimation.initial}
        viewport={{ once: true }}
        whileInView={HeroAnimation.inInitial}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-64 "
      >
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
          className=" hover:shadow-none text-black bg-clrLayoutGreen shadow-btnDrop flex items-center gap-2 justify-center flex-wrap text-mediumFnt font-midFnt  py-1.5 px-5 rounded-regBtn"
        >
          Play now
        </Link>
      </motion.div>
    </div>
  );
};
export default Home;
