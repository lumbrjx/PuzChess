"use client";

import React, { FC, useEffect, useState } from "react";
import Button from "../ui/button";
import ChessBoard from "./chessBoard";
import { useFetchPuzzle } from "@/lib/hooks/query/fetchPuzzle";
import getCurrentDimension from "@/lib/utils/dimensions";
import { getSidePlay } from "../../lib/utils/chess";
import { useSession } from "next-auth/react";
import { useUpdateScore } from "@/lib/hooks/mutate/updateScore";

type setGameType = {
  setGame: (value: boolean) => void;
  user: {
    score: number;
  };
};
type gameStatusType = "PLAYING" | "WIN" | "LOSE";

const ChessSession: FC<setGameType> = ({ setGame, user }) => {
  let thewidth: number = 450;
  //screen size state
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  // current game status *player playing/ losing/ winning *
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
  //fetching the chess puzzle form the api
  const { data: obj, error, refetch } = useFetchPuzzle();
  //session data
  const { data: session } = useSession();
  //the fen and the solution states
  const [fen, setFen] = useState(obj?.puzzles[0].fen);
  const [solution, setSolution] = useState(obj?.puzzles[0].moves);
  //setting the initial fen/solution states when the api object is available
  useEffect(() => {
    if (obj?.puzzles[0].fen) {
      setFen(obj?.puzzles[0].fen);
      setSolution(obj?.puzzles[0].moves);
    }
  }, [obj?.puzzles[0].fen]);
  //updating user score
  const { mutate, data } = useUpdateScore(session?.user?.email);
  useEffect(() => {
    if (gameStatus === "WIN") {
      if (data?.data) {
        mutate({ score: data?.data, state: gameStatus });
      } else {
        mutate({ score: user?.score, state: gameStatus });
      }
    }
    if (gameStatus === "LOSE") {
      if (data?.data) {
        mutate({ score: data?.data, state: gameStatus });
      } else {
        mutate({ score: user?.score, state: gameStatus });
      }
    }
  }, [gameStatus]);
  //refetching from the api if the user wins the round
  //i made this due to api limitations
  const handleNextButtonClick = () => {
    refetch();
    setGameStatus("PLAYING");
  };
  return (
    <div className="  pb-26  gap-10 text-mediumF  w-full  top-0 bg-header flex flex-col items-center">
      <div className="w-full  max-w-[31.125rem] items-center  h-full flex flex-col justify-between gap-8">
        <div className="flex justify-between w-full px-6">
          <p className={`  ${gameStatus === "LOSE" && "text-red-400"}`}>
            {data?.data ? data?.data : ""}
            {error && "Error"}
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
            fen={fen}
            setFen={setFen}
            solution={solution}
            setSolution={setSolution}
            gameStatus={gameStatus}
            onCorrect={() => setGameStatus((prev) => "PLAYING")}
            onIncorrect={() => {
              setGameStatus((prev) => "LOSE");
              //
            }}
            onSolve={() => {
              setGameStatus((prev) => "WIN");
            }}
            orientation={
              getSidePlay(obj?.puzzles[0].fen) === "b" ? "white" : "black"
            }
            sol={obj?.puzzles[0].moves}
            width={thewidth}
            theFen={obj?.puzzles[0].fen}
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
              onClick={handleNextButtonClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChessSession;
