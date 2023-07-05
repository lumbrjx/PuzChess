import React from "react";

const FAQ = () => {
  return (
    <div className="w-full text-mediumFnt font-midFnt text-clrFont px-4 gap-20 lg:px-16 pb-16 flex flex-col justify-center pt-[10rem] mb-[10rem]">
      <h2 className="text-largeFnt">Frequently Asked Questions</h2>

      <div className="flex flex-col gap-3">
        <h2 className="text-bigFnt">What is PuzChess?</h2>
        <p className="mb-8">
          PuzChess is a new fresh platform with friendly design and endless
          chess puzzles to skyrocket your chess skills and middlegame logic.
        </p>

        <h2 className="text-bigFnt">
          What type of challenge does PuzChess offer?
        </h2>
        <p className="mb-8">
          PuzChess offers a variety of challenges to make the user experience
          more fun and engaging.
        </p>

        <h2 className="text-bigFnt">Is PuzChess free?</h2>
        <p className="mb-8">
          Yes, PuzChess is completely free to use. Enjoy unlimited chess puzzles
          without any cost.
        </p>

        <h2 className="text-bigFnt">
          Is PuzChess suitable for all skill levels?
        </h2>
        <p className="mb-8">
          Yes, PuzChess caters to chess players of all skill levels. Whether you
          are a beginner or an advanced player, you will find puzzles that match
          your level.
        </p>

        <h2 className="text-bigFnt">Where can I find more information?</h2>
        <p className="mb-8">
          You can check out our blogs - CLOG for more information and updates.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
