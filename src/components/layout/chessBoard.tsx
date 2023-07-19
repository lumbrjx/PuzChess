"use client";
import getCurrentDimension from "@/lib/utils/dimensions";
import Chessboard from "chessboardjsx";
import React, { FC, useEffect, useState } from "react";
interface BoardType {
  fen: string;
  width?: number;
}

const ChessBoard: FC<BoardType> = ({ fen, width }) => {
  return (
    <Chessboard
      position={fen}
      width={width}
      boardStyle={{
        borderRadius: "100px",
      }}
      lightSquareStyle={{ backgroundColor: "#F1F1F1" }}
      darkSquareStyle={{ backgroundColor: "#6D9D4C" }}
    />
  );
};

export default ChessBoard;
