"use client";
import { useFetchPuzzle } from "@/lib/hooks/query/fetchPuzzle";
import Button from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import PlayTemp from "./playTemp";

const GameSession = () => {
  const [game, setGame] = useState(false);
  const puzzle = useFetchPuzzle();

  return (
    <>
      {game === false ? (
        <PlayTemp setGame={setGame} />
      ) : (
        <div className="py-40 flex px-40  justify-around  items-center w-full ">
          gamr sesssion
        </div>
      )}
    </>
  );
};

export default GameSession;
