import { ShortMove, Square } from "chess.js";

export default function convertStringToObject(moveString: string): ShortMove {
  const from = moveString.slice(0, 2) as Square;
  const to = moveString.slice(2, 4) as Square;
  const promotion = "q";

  return {
    from,
    to,
    promotion,
  };
}
