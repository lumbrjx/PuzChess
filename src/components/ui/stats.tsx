import React from "react";

const Stats = ({
  usr,
  blg,
}: {
  usr: number | undefined;
  blg: number | undefined;
}) => {
  return (
    <div
      className="text-mediumFnt bg-clrPrimaryBlack
    rounded-2xl w-full max-w-[20rem] border border-1 border-clrSecondaryGrey shadow-cardDrop  py-12 px-4 sm:p-12"
    >
      <h2 className="font-boldFnt text-mediumF mb-4">Server stats</h2>
      <p>Users: {usr}</p>
      <p>Blogs: {blg}</p>
    </div>
  );
};

export default Stats;
