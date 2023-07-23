"use client";

import React, { FC, useEffect, useState } from "react";
import Button from "../ui/button";
import ChessBoard from "./chessBoard";
import { useFetchPuzzle } from "@/lib/hooks/query/fetchPuzzle";
import getCurrentDimension from "@/lib/utils/dimensions";
import { getSidePlay } from "../../lib/utils/chess";

type setGameType = {
  setGame: (value: boolean) => void;
};
type gameStatusType = "PLAYING" | "WIN" | "LOSE";

const ChessSession: FC<setGameType> = ({ setGame }) => {
  let thewidth: number = 450;
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [gameStatus, setGameStatus] = useState<gameStatusType>("PLAYING");
  //resising the chessboard based on the screen size /there's no available way in the chessboardJsx lib/
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  if (screenSize.width <= 450) {
    thewidth = screenSize.width;
  }
  const theFen =
    "r4r2/2pqbppk/p2p1n1p/1p3N2/4PB2/1P1P3P/1PP3P1/R3QRK1 w - - 1 20";
  // r1b4k/ppp3bp/2npq1p1/6B1/3P4/2P2Q2/PP1K2PP/4R3 b - - 1 19
  const sol = ["f4h6", "g7h6", "e4e5", "d6e5", "e1e5", "e7d8", "e5f4", "f6g8"];
  // const { data, error, refetch } = useFetchPuzzle();
  // {
  //   data
  //     ? console.log(data.puzzles[0].fen)
  //     : error
  //     ? console.log(error)
  //     : refetch
  //     ? console.log("refeting ur  stupid data")
  //     : "";
  // }
  return (
    <div className="  pb-26  gap-10 text-mediumF  w-full  top-0 bg-header flex flex-col items-center">
      <div className="w-full  max-w-[31.125rem] items-center  h-full flex flex-col justify-between gap-8">
        <div className="flex justify-between w-full px-6">
          <p className={`  ${gameStatus === "LOSE" && "text-red-400"}`}>
            the score
          </p>
          <p
            className={`  ${gameStatus === "LOSE" && "text-red-400"} ${
              gameStatus === "WIN" && "text-green-400"
            }`}
          >
            {gameStatus === "WIN" && "Great!!"}
            {gameStatus === "LOSE" && "Oops.."}
          </p>
        </div>
        <div
          className={`rounded-md border-[4px] border-clrPrimaryBlack${
            gameStatus === "LOSE" && "  border-red-400"
          } ${gameStatus === "WIN" && "border-green-400"}`}
        >
          <ChessBoard
            gameStatus={gameStatus}
            onCorrect={() => setGameStatus("PLAYING")}
            onIncorrect={() => setGameStatus("LOSE")}
            onSolve={() => setGameStatus("WIN")}
            orientation={getSidePlay(theFen) === "b" ? "white" : "black"}
            sol={sol}
            width={thewidth}
            theFen={theFen}
          />{" "}
        </div>

        <div className="flex w-full justify-between text-white px-6 ">
          <Button
            label="Exit"
            style="Transparent"
            additional="rounded-regBtn px-8 text-white"
            onClick={() => setGame(false)}
          />
          {gameStatus === "PLAYING" || gameStatus === "LOSE" ? (
            <Button
              label="Next"
              style="Green"
              disable
              additional="rounded-regBtn px-8 text-black  opacity-40"
            />
          ) : (
            <Button
              label="Next"
              style="Green"
              additional="rounded-regBtn px-8 text-black"
              // onClick={refetch}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChessSession;
