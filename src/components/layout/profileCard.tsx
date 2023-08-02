"use client";
import React, { FC, useState } from "react";
import UserImg from "../ui/userImg";
import Button from "../ui/button";
import DeleteModal from "./deleteModal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Badge from "../ui/badge";
import { UploadButton } from "@uploadthing/react";

import { OurFileRouter } from "../../app/api/uploadthing/core";
// import { useUploadThing } from "@/lib/utils/uploadthing";
// import { UploadButton } from "@/lib/utils/uploader";
// enum budges {
//   "ROCKIE",
//   "SILVER",
//   "GOLDEN",
//   "DIAMOND",
//   "PLATINIUM",
// }
// type userType = {
//   user: {
//     name: string;
//     badge: budges;
//     chessElo: number | null;
//     email: string | null;
//     image: string | null;
//   } | null;
// };
const ProfileCard = ({ user }: any) => {
  return (
    <div
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
        <p className="text-clrSecondaryGrey">Played games: later</p>
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

        <DeleteModal />
      </div>
    </div>
  );
};

export default ProfileCard;
