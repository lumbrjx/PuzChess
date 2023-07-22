"use client";
import getCurrentDimension from "@/lib/utils/dimensions";
import { ShortMove } from "chess.js";
import Chessboard from "chessboardjsx";
import React, { FC, useEffect, useState } from "react";
import Tactic from "@/lib/types/chess";

import {
  getSideToPlayFromFen,
  makeMove,
  validateMove,
} from "../../lib/utils/chess";
import convertStringToObject from "@/lib/utils/stringParser";
interface BoardType {
  theFen: string;
  width?: number;
  orientation: "white" | "black" | undefined;
  sol: string[];
  // tactic: Tactic;
  onIncorrect: () => void;
  onCorrect: () => void;
  onSolve: () => void;
}

const ChessBoard: FC<BoardType> = ({
  theFen,
  width,
  orientation,
  sol,
  onCorrect,
  onIncorrect,
  onSolve,
}) => {
  const [fen, setFen] = useState(theFen);
  const [solution, setSolution] = useState(sol);
  useEffect(() => {
    setTimeout(() => {
      const next = makeMove(theFen, solution[0]);
      if (next) {
        setFen(next.fen);
      }
    }, 100);
  }, [theFen]);
  console.log("now play this move ", solution[0]);
  const handleMove = (move: string | ShortMove) => {
    const next = validateMove(fen, move, solution);
    // console.log("move from front ", next);

    if (next) {
      setFen(next.fen);
      setSolution(next.solution);

      if (next.solution.length > 0 && solution[0] !== undefined) {
        onCorrect();
        // console.log("lonely sol ", solution);
        const autoNext = validateMove(
          next.fen,

          convertStringToObject(next.solution[0]),
          next.solution
        );
        console.log("imautonext", autoNext);
        if (autoNext) {
          setFen(autoNext.fen);
          console.log("autonext sol ", autoNext.solution);
          setSolution(autoNext.solution);
        }
      } else {
        onSolve();
      }
    } else {
      onIncorrect();
    }
  };

  return (
    <Chessboard
      transitionDuration={500}
      orientation={orientation}
      position={fen}
      width={width}
      boardStyle={{
        borderRadius: "100px",
      }}
      onDrop={(move) => {
        // console.log(move);
        handleMove({
          from: move.sourceSquare,
          to: move.targetSquare,
          promotion: "q",
        });
      }}
      lightSquareStyle={{ backgroundColor: "#F1F1F1" }}
      darkSquareStyle={{ backgroundColor: "#6D9D4C" }}
    />
  );
};

export default ChessBoard;
