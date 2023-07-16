"use client";
import { useFetchPuzzle } from "@/lib/hooks/query/fetchPuzzle";
import Button from "../ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import PlayTemp from "./playTemp";
import ChessSession from "./chessSession";

const GameSession = () => {
  const [game, setGame] = useState(false);
  useEffect(() => {
    game
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [game]);
  const puzzle = useFetchPuzzle();
  console.log(puzzle);

  return (
    <>
      {game === false ? (
        <PlayTemp setGame={setGame} />
      ) : (
        <div className="py-40 flex px-40  justify-around  items-center w-full ">
          <ChessSession setGame={setGame} chessObject={puzzle} />
        </div>
      )}
    </>
  );
};

export default GameSession;
