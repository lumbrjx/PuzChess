import React, { FC } from "react";
import UserImg from "../ui/userImg";
import Button from "../ui/button";
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
    <div className="text-mediumFnt bg-clrPrimaryBlack rounded-2xl w-full border border-clrSecondaryGrey max-w-[36rem] shadow-cardDrop  py-12 px-4 sm:p-12">
      <div className="flex justify-between w-full mb-10">
        <div className="flex gap-4">
          <UserImg src={user?.image} />
          <h2>{user?.name}</h2>
        </div>
        <div>{user?.badge}</div>
      </div>
      <div className="mb-10">
        <p>Email : {user?.email}</p>
        <p>Elo : {user?.chessElo}</p>
        <p>Rank : later</p>
        <p>played games : later</p>
      </div>
      <div className="flex sm:justify-between flex-wrap justify-center gap-2">
        <Button
          label="Edit profile"
          style="Green"
          additional="rounded-regBtn px-10 text-black"
        />
        <Button
          label="Delete account"
          style="Transparent"
          additional="rounded-regBtn"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
