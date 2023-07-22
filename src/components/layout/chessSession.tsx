"use client";
import { ShortMove } from "chess.js";
import Chessboard from "chessboardjsx";
import React, { FC, useEffect, useState } from "react";
import PageLogo from "../ui/pageLogo";
import Button from "../ui/button";
import ChessBoard from "./chessBoard";
import { useFetchPuzzle } from "@/lib/hooks/query/fetchPuzzle";
import getCurrentDimension from "@/lib/utils/dimensions";
import { getSideToPlayFromFen } from "../../lib/utils/chess";

type setGameType = {
  setGame: (value: boolean) => void;
};
const ChessSession: FC<setGameType> = ({ setGame }) => {
  let thewidth: number = 450;
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
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
    thewidth = screenSize.width - 50;
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
      <div className="w-full  max-w-[31.125rem] items-center  h-full flex flex-col justify-between">
        <div className="">
          <p>the score</p>
        </div>
        <div>
          <ChessBoard
            onCorrect={() => console.log("yeeeeyy correct")}
            onIncorrect={() => console.log("not this time u sucker")}
            onSolve={() => console.log("good job boooy")}
            orientation={
              getSideToPlayFromFen(theFen) === "b" ? "black" : "white"
            }
            sol={sol}
            width={thewidth}
            theFen={theFen}
          />{" "}
        </div>

        <div className="flex w-full justify-between text-white px-6 mt-4">
          <Button
            label="Exit"
            style="Transparent"
            additional="rounded-regBtn px-8 text-white"
            onClick={() => setGame(false)}
          />
          <Button
            label="Next"
            style="Green"
            additional="rounded-regBtn px-8 text-black"
            // onClick={refetch}
          />
        </div>
      </div>
    </div>
  );
};

export default ChessSession;
