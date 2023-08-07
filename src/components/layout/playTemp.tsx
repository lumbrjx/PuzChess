"use client";
import React, { FC } from "react";
import Button from "../ui/button";
import Image from "next/image";
import Badge from "../ui/badge";
import { motion } from "framer-motion";

import { customAnimation } from "@/lib/hooks/animation/animations";

type setGame = {
  setGame: (value: boolean) => void;
  user: {
    score: number;
    badge: "ROCKIE" | "SILVER" | "GOLDEN" | "DIAMOND" | "PLATINIUM";
    chessElo: number;
  };
};
const PlayTemp: FC<setGame> = ({ setGame, user }) => {
  const { HeroAnimation } = customAnimation();
  return (
    <div className="py-56 flex px-10  lg:px-40 justify-around  items-center w-full  ">
      <div className="flex w-auto gap-12 flex-col items-start">
        <div className="flex  flex-col md:items-start items-center">
          <motion.h2
            initial={HeroAnimation.initial}
            animate={HeroAnimation.inInitial}
            transition={{ duration: 0.8 }}
            className="md:text-largeFnt text-[2.3rem]  font-boldFnt text-center md:text-left"
          >
            Launch a game
          </motion.h2>
          <motion.p
            initial={HeroAnimation.initial}
            animate={HeroAnimation.inInitial}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-mediumFnt md:text-mediumF text-center md:text-left"
          >
            Test your skills with a random sets <br></br> of chess puzzles
          </motion.p>
        </div>
        <div className="flex gap-4 justify-center  md:justify-between  md:items-start  w-full max-w-[18rem] text-mediumFnt">
          <motion.div
            initial={HeroAnimation.initial}
            animate={HeroAnimation.inInitial}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <p>{user?.badge.toLowerCase()} league</p>
            <div className=" ">
              <Badge badge={user?.badge} />
            </div>
          </motion.div>

          <motion.p
            initial={HeroAnimation.initial}
            animate={HeroAnimation.inInitial}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            elo: {user?.chessElo}
          </motion.p>
        </div>
        <motion.div
          initial={HeroAnimation.initial}
          animate={HeroAnimation.inInitial}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex w-full max-w-[18rem] justify-center md:justify-start"
        >
          <Button
            label="Play"
            style="Green"
            additional="rounded-regBtn px-8 text-black"
            onClick={() => {
              setGame(true);
            }}
          />
        </motion.div>
      </div>
      <motion.div
        initial={HeroAnimation.initial}
        animate={HeroAnimation.inInitial}
        transition={{ duration: 0.8 }}
        className="  hidden lg:block  "
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
  );
};

export default PlayTemp;
