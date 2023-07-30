"use client";

import { useState } from "react";
import PlayTemp from "./playTemp";
import ChessSession from "./chessSession";
import { useFetchUser } from "@/lib/hooks/query/fetchUser";
import { useSession } from "next-auth/react";

const GameSession = () => {
  //session data
  const { data: session } = useSession();
  //fetching user info to update his score
  const user = useFetchUser(session?.user?.email);
  //game state *game session is started or not?*
  const [game, setGame] = useState(false);
  return (
    <>
      {game === false ? (
        <PlayTemp setGame={setGame} user={user} />
      ) : (
        <div className="py-28 flex md:px-40  justify-around  items-center w-full ">
          <ChessSession setGame={setGame} user={user} />
        </div>
      )}
    </>
  );
};

export default GameSession;
