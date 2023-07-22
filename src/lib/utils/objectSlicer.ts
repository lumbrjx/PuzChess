import { ShortMove } from "chess.js";

export default function objectSlicer(rawObject: ShortMove | string): ShortMove {
  const { from, to }: any | ShortMove = rawObject;
  return { from, to };
}
