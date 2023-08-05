"use client";
import React, { useEffect, useState } from "react";
import UserImg from "../ui/userImg";
import Button from "../ui/button";
import Badge from "../ui/badge";

import { useSession } from "next-auth/react";
import { useAddFriend } from "@/lib/hooks/mutate/addFriend";
import { useRemFriend } from "@/lib/hooks/mutate/removeFriend";

function UserCard({ user }: { user: any }) {
  const [follower, setFollwer] = useState(false);
  const { data: session } = useSession();
  const { mutate } = useAddFriend(session?.user?.email);
  const { mutate: rem } = useRemFriend(session?.user?.email);

  useEffect(() => {
    if (user.followedBy.length !== 0) {
      if (user.followedBy[0].name === session?.user?.name) {
        setFollwer(true);
      }
    }
  }, [user.followedBy]);
  const handleFriend = () => {
    mutate({ friendId: user?.email });
    setFollwer(true);
  };
  const handleFriendUnfollow = () => {
    rem({ friendId: user?.email });
    setFollwer(false);
  };
  return (
    <div
      className="text-mediumFnt bg-clrPrimaryBlack
       rounded-2xl w-full
       max-w-[26rem] shadow-cardDrop  py-12 px-4 sm:p-12"
    >
      <div className="flex justify-between items-center w-full mb-10">
        <div className="flex gap-4">
          <UserImg src={user?.image} />
          <h2>{user?.name}</h2>
        </div>
        <div className="">
          {follower === false ? (
            <Button
              label="Follow"
              style="Grey"
              additional="rounded-regBtn px-10 text-white "
              disable={user?.name === session?.user?.name ? true : false}
              onClick={handleFriend}
            />
          ) : follower === true ? (
            <Button
              label="Unfollow"
              style="Grey"
              additional="rounded-regBtn px-10 text-white "
              disable={user?.name === session?.user?.name ? true : false}
              onClick={handleFriendUnfollow}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mb-10">
        <p>Elo : {user?.chessElo}</p>
        <div className="flex gap-2 items center">
          <p>Rank : {user?.chessElo}</p>
          <Badge badge={user?.badge} />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
