import { ChessInstance, ShortMove } from "chess.js";
const Chess = require("chess.js");
//checking which side should play
export function getSidePlay(fen: string) {
  const chess: ChessInstance = new Chess(fen);
  return chess.turn();
}
//making a move on the board
export function makeMv(fen: string, move: ShortMove | string) {
  const chess: ChessInstance = new Chess(fen);
  const fullMove = chess.move(move);
  if (fullMove) {
    const nextPosition: string = fullMove.from + fullMove.to;
    return { nextPosition, fen: chess.fen() };
  }
  return null;
}
//checking if the move is possible and valid according to the solution array from the api object
export function validateMv(
  fen: string,
  move: ShortMove | string,
  solution: string[]
): null | { solution: string[]; fen: string; move: string | ShortMove } {
  if (solution?.length === 0) {
    return null;
  }
  const next = makeMv(fen, move);
  //returning the solution without the first arrg with move made and the new fen
  if (next?.nextPosition === solution[0]) {
    return {
      fen: next.fen,
      solution: solution.slice(1),
      move: move,
    };
  }
  return null;
}
