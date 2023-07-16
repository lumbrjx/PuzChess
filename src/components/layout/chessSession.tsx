import React, { FC } from "react";
import PageLogo from "../ui/pageLogo";
import Button from "../ui/button";
type setGame = {
  setGame: (value: boolean) => void;
  chessObject: any;
};
const ChessSession: FC<setGame> = ({ setGame, chessObject }) => {
  return (
    <div className="absolute  py-36 h-screen gap-10 text-mediumF z-50 w-full  top-0 bg-header flex flex-col items-center">
      <div className="w-full bg-green-500 max-w-[52rem]   h-full flex flex-col justify-between">
        <div className="">
          <p>the score</p>
        </div>
        <div>chessboard</div>

        <div className="flex w-full justify-between text-white">
          <Button
            label="Exit"
            style="Transparent"
            additional="rounded-regBtn px-8 text-black"
            onClick={() => setGame(false)}
          />
          <Button
            label="Next"
            style="Green"
            additional="rounded-regBtn px-8 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default ChessSession;
