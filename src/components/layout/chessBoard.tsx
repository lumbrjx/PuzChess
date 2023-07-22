"use client";
import getCurrentDimension from "@/lib/utils/dimensions";
import { ShortMove } from "chess.js";
import Chessboard from "chessboardjsx";
import React, { FC, useEffect, useState } from "react";
import Tactic from "@/lib/types/chess";

import {
  // getPrevMoves,
  getSideToPlayFromFen,
  makeMove,
  validateMove,
} from "../../lib/utils/chess";
import convertStringToObject from "@/lib/utils/stringParser";
import objectSlicer from "@/lib/utils/objectSlicer";
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
  const [currentPosition, setCurrentposition] = useState<string | ShortMove>();
  console.log("current position", currentPosition);
  useEffect(() => {
    setTimeout(() => {
      if (solution.length === 8) {
        const next = validateMove(
          fen,
          convertStringToObject(solution[0], false),
          solution
        );
        if (next) {
          setFen(next.fen);
          setSolution(next.solution);
        }
      }
    }, 100);
  }, [solution]);
  console.log("now play this move ", solution[0]);
  const handleMove = (move: string | ShortMove) => {
    const next = validateMove(fen, move, solution);
    // console.log("move from front ", next);

    if (next) {
      setFen(next.fen);
      setSolution(next.solution);
      setCurrentposition(objectSlicer(next.move));
      // getPrevMoves();

      if (next.solution.length > 0 && solution[0] !== undefined) {
        onCorrect();
        // console.log("lonely sol ", solution);
        const autoNext = validateMove(
          next.fen,

          convertStringToObject(next.solution[0], false),
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
      setSolution(sol);
      setFen(theFen);
    }
  };

  return (
    <Chessboard
      transitionDuration={200}
      orientation={orientation}
      dropSquareStyle={{ backgroundColor: "sienna" }}
      // draggable={false}
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
      squareStyles={{
        e4: { backgroundColor: "orange" },
        d4: { backgroundColor: "blue" },
      }}
      lightSquareStyle={{ backgroundColor: "#F1F1F1" }}
      darkSquareStyle={{ backgroundColor: "#6D9D4C" }}
    />
  );
};

export default ChessBoard;
