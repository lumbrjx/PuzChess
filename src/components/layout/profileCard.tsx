"use client";
import React from "react";
import UserImg from "../ui/userImg";

import DeleteModal from "./deleteModal";
import Link from "next/link";
import { motion } from "framer-motion";
import { customAnimation } from "@/lib/hooks/animation/animations";
import Badge from "../ui/badge";

const ProfileCard = ({ user }: any) => {
  const { HeroAnimation } = customAnimation();
  return (
    <motion.div
      initial={HeroAnimation.initial}
      animate={HeroAnimation.inInitial}
      transition={{ duration: 0.2 }}
      className="text-mediumFnt bg-clrPrimaryBlack
     rounded-2xl w-full
     max-w-[36rem] shadow-cardDrop  py-12 px-4 sm:p-12"
    >
      <div className="flex justify-between w-full mb-10">
        <div className="flex gap-4 items-center">
          <UserImg src={user?.image} />
          <h2>{user?.name}</h2>
          <Link
            className="text-smallFnt underline text-clrSecondaryGrey "
            href={"upld"}
          >
            Change avatar
          </Link>
        </div>

        <div>
          <Badge badge={user?.badge} />
        </div>
      </div>
      <div className="mb-10">
        <p className="text-clrSecondaryGrey">Email: {user?.email}</p>
        <p>Elo : {user?.chessElo}</p>
        <p className="text-clrSecondaryGrey">Rank: {user?.score}</p>
      </div>
      <div
        className="flex justify-between w-full 
      flex-wrap  gap-2"
      >
        <Link
          href={"/profile/edit"}
          className="w-full max-w-[9rem] text-black bg-clrLayoutGreen shadow-btnDrop flex items-center gap-2 justify-center flex-wrap text-mediumFnt font-midFnt  py-1.5 px-5 rounded-regBtn"
        >
          Edit profile
        </Link>

        <DeleteModal email={user?.email} />
      </div>
    </motion.div>
  );
};

export default ProfileCard;
