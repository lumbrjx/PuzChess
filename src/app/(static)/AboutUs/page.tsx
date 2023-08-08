import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full text-mediumFnt font-midFnt max-w-[50rem] text-clrFont px-4 gap-20 lg:px-16 pb-16 flex flex-col justify-center pt-[10rem] mb-[10rem]">
      <h2 className="text-largeFnt">Who we are ?</h2>
      <p>
        PuzChess is new fresh platform with friendly design and endless chess
        puzzle to skyrock your chess skills and middlegame logic, we give a type
        of challenge to make our user experience more fun.
      </p>
      <p>
        This platform still in its first release and you may face some
        limitaions in the chess game or encounter some bugs that we did not see
        in development, Feel free to send a feedback/report in
        puzchess@gmail.com and we will review it as soon as possible.
      </p>
      <p>
        PuzChess is made by a solo developer with bleeding edge tech to deliver
        great performance, User experience with a reliable and secure
        environement. We try our best to prevent malicious actions on our
        service
      </p>
    </div>
  );
};

export default AboutUs;
