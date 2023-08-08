import React from "react";

const FAQ = () => {
  return (
    <div className="w-full text-mediumFnt md:ms-56 font-midFnt max-w-[50rem] text-clrFont px-4 gap-20 lg:px-16 pb-16 flex flex-col justify-center pt-[10rem] mb-[10rem]">
      <h2 className="text-largeFnt">Frequently Asked Questions</h2>

      <div className="flex flex-col gap-3">
        <h2 className="text-bigFnt">Who made this platform?</h2>
        <p className="mb-8">
          PuzChess is made by a solo developer with bleeding edge tech to
          deliver great performance, User experience with a reliable and secure
          environement. We try our best to prevent malicious actions on our
          service
        </p>
        <h2 className="text-bigFnt">Who we are?</h2>
        <p className="mb-8">
          PuzChess is new fresh platform with friendly design and endless chess
          puzzle to skyrock your chess skills and middlegame logic, we give a
          type of challenge to make our user experience more fun.
        </p>
        <h2 className="text-bigFnt">Is PuzChess free?</h2>
        <p className="mb-8">
          Yes for now you can enjoy our platform for free, but in the next
          upadtes you will have to pay to access more awesome features.
        </p>

        <h2 className="text-bigFnt">
          What type of challenge does PuzChess offer?
        </h2>
        <p className="mb-8">
          Basically, we think that solving a chess puzzle is more fun than a
          normal PvP game, However we will add the normal games soon.
        </p>

        <h2 className="text-bigFnt">
          Is PuzChess suitable for all skill levels?
        </h2>
        <p className="mb-8">
          Yes, PuzChess caters to chess players of all skill levels. Whether you
          are a beginner or an advanced player, you will find puzzles that match
          your level.
        </p>

        <h2 className="text-bigFnt">What will be added in the next updates?</h2>
        <p className="mb-8">
          We will focus to migrate our puzzles api to an independent state, PvP
          and friends Chats!
        </p>
        <h2 className="text-bigFnt">How can i reach you?</h2>
        <p className="mb-8">
          This platform still in its first release and you may face some
          limitaions in the chess game or encounter some bugs that we did not
          see in development, Feel free to send a feedback/report in
          puzchess@gmail.com and we will review it as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
