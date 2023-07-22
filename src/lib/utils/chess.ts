import { ChessInstance, ShortMove } from "chess.js";

const Chess = require("chess.js");

export function getSideToPlayFromFen(fen: string) {
  const chess: ChessInstance = new Chess(fen);
  return chess.turn();
}

export function makeMove(fen: string, move: ShortMove | string) {
  console.log("im fen form make", fen);
  console.log("im move form make", move);
  const chess: ChessInstance = new Chess(fen);
  const fullMove = chess.move(move);
  console.log("im full move", fullMove);

  if (fullMove) {
    const nextPosition: string = fullMove.from + fullMove.to;
    return { nextPosition, fen: chess.fen() };
  }
  return null;
}

export function validateMove(
  fen: string,
  move: ShortMove | string,
  solution: string[]
): null | { solution: string[]; fen: string } {
  if (solution.length === 0) {
    return null;
  }
  console.log("im move", move);
  console.log("im fen ", fen);
  console.log("im solution ", solution);
  const next = makeMove(fen, move);
  console.log("inner next", next);
  if (next?.nextPosition === solution[0]) {
    return {
      fen: next.fen,
      solution: solution.slice(1),
    };
  }

  return null;
}
