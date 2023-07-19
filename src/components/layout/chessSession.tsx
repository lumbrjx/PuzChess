"use client";
import React, { FC, useEffect, useState } from "react";
import PageLogo from "../ui/pageLogo";
import Button from "../ui/button";
import ChessBoard from "./chessBoard";
import { useFetchPuzzle } from "@/lib/hooks/query/fetchPuzzle";
import getCurrentDimension from "@/lib/utils/dimensions";
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
            width={thewidth}
            fen={"3r2k1/p4pp1/2p2q2/5B1p/2P2n2/7P/P1Q1r1PK/R4R2 w - - 2 24"}
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
