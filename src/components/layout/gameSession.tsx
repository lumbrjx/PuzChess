"use client";
import { useFetchPuzzle } from "@/lib/hooks/query/fetchPuzzle";
import Button from "../ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import PlayTemp from "./playTemp";
import ChessSession from "./chessSession";

const GameSession = () => {
  const [fetch, setFetch] = useState(false);

  const [game, setGame] = useState(false);
  console.log("fetch in game", fetch);
  // useEffect(() => {
  //   game
  //     ? (document.body.style.overflow = "hidden")
  //     : (document.body.style.overflow = "auto");
  // }, [game]);

  return (
    <>
      {game === false ? (
        <PlayTemp setGame={setGame} />
      ) : (
        <div className="py-24 flex md:px-40  justify-around  items-center w-full ">
          <ChessSession setGame={setGame} />
        </div>
      )}
    </>
  );
};

export default GameSession;
