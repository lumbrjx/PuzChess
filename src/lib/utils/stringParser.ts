import { ShortMove, Square } from "chess.js";
//string to shortmove / object converter function
export default function convertStringToObject(
  moveString: string,
  onlyPosition: boolean
): ShortMove {
  const from = moveString.slice(0, 2) as Square;
  const to = moveString.slice(2, 4) as Square;
  const promotion = "q";
  if (onlyPosition) {
    return { from, to };
  } else {
    return { from, to, promotion };
  }
}
