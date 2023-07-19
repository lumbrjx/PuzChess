import React, { FC } from "react";
import Button from "../ui/button";
import Image from "next/image";
type setGame = {
  setGame: (value: boolean) => void;
};
const PlayTemp: FC<setGame> = ({ setGame }) => {
  return (
    <div className="py-40 flex px-10  lg:px-40 justify-around  items-center w-full  ">
      <div className="flex w-auto gap-12 flex-col items-start">
        <div className="flex  flex-col md:items-start items-center">
          <h2 className="md:text-largeFnt text-[2.3rem]  font-boldFnt text-center md:text-left">
            Launch a game
          </h2>
          <p className="text-mediumFnt md:text-mediumF text-center md:text-left">
            Test your skills with a random sets <br></br> of chess puzzles
          </p>
        </div>
        <div className="flex gap-4 justify-center  md:justify-between  md:items-start  w-full max-w-[18rem] text-mediumFnt">
          <p>rank</p>
          <p>badge</p>
          <p>elo</p>
        </div>
        <div className="flex w-full max-w-[18rem] justify-center md:justify-start">
          <Button
            label="Play"
            style="Green"
            additional="rounded-regBtn px-8 text-black"
            onClick={() => {
              setGame(true);
            }}
          />
        </div>
      </div>
      <div className="  hidden lg:block  ">
        <Image
          alt="dice"
          src={"/dice.svg"}
          quality={100}
          priority
          width={350}
          height={350}
        />{" "}
      </div>
    </div>
  );
};

export default PlayTemp;
