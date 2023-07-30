"use client";

import { ShortMove } from "chess.js";
import Chessboard from "chessboardjsx";
import React, { FC, useEffect, useState } from "react";

import { validateMv } from "../../lib/utils/chess";
import convertStringToObject from "@/lib/utils/stringParser";
import objectSlicer from "@/lib/utils/objectSlicer";

//types for the component and the position object
interface BoardType {
  theFen: string;
  width?: number;
  orientation: "white" | "black" | undefined;
  sol: string[];
  fen: string;
  solution: string[];
  setFen: any;
  setSolution: any;
  onIncorrect: () => void;
  onCorrect: () => void;
  onSolve: () => void;
  gameStatus: "PLAYING" | "WIN" | "LOSE";
}
interface positionState {
  from: string;
  to: string;
}

const ChessBoard: FC<BoardType> = ({
  theFen,
  fen,
  solution,
  setFen,
  setSolution,
  width,
  orientation,
  sol,
  onCorrect,
  onIncorrect,
  onSolve,
  gameStatus,
}) => {
  console.log(solution);
  //the last played piece position
  const [currentPosition, setCurrentposition] = useState<positionState>();
  //making the first move by the engine based on the solution rules =>
  //*always the opposite side make the first move*
  useEffect(() => {
    setTimeout(() => {
      //the solution array always have 8 moves if its less than 8 means
      //the first move already has been played
      if (solution?.length === 8) {
        const next = validateMv(
          fen,
          convertStringToObject(solution[0], false),
          solution
        );
        if (next) {
          setFen(next.fen);
          setSolution(next.solution);
          setCurrentposition(objectSlicer(next.move));
        }
      }
    }, 100);
  }, [solution]);
  // the core function for checking the move validation and making the autoMove *the engine next move*
  const doMove = (move: string | ShortMove) => {
    const next = validateMv(fen, move, solution);

    if (next) {
      setFen(next.fen);
      setSolution(next.solution);

      if (next.solution.length > 0 && solution[0] !== undefined) {
        onCorrect();

        const autoNext = validateMv(
          next.fen,

          convertStringToObject(next.solution[0], false),
          next.solution
        );

        if (autoNext) {
          setFen(autoNext.fen);

          setSolution(autoNext.solution);
          setCurrentposition(objectSlicer(autoNext.move));
        }
      } else {
        onSolve();
      }
    } else {
      onIncorrect();
      setSolution(sol);
      setFen(theFen);
    }
  };
  //object for the square styling *the old and the new cordinate of the played peice*
  const squareStyles: { [key: string]: { backgroundColor: string } } = {};

  if (currentPosition && currentPosition.from) {
    squareStyles[currentPosition.from] = { backgroundColor: "#ACA733" };
  }

  if (currentPosition && currentPosition.to) {
    squareStyles[currentPosition.to] = { backgroundColor: "#ACA733" };
  }

  return (
    <Chessboard
      transitionDuration={200}
      orientation={orientation}
      dropSquareStyle={{ backgroundColor: "sienna" }}
      draggable={gameStatus === "WIN" ? false : true}
      position={fen}
      width={width}
      boardStyle={{
        borderRadius: "100px",
      }}
      onDrop={(move) => {
        doMove({
          from: move.sourceSquare,
          to: move.targetSquare,
          promotion: "q",
        });
      }}
      squareStyles={squareStyles}
      lightSquareStyle={{ backgroundColor: "#F1F1F1" }}
      darkSquareStyle={{ backgroundColor: "#6D9D4C" }}
    />
  );
};

export default ChessBoard;
