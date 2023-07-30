import Badge from "../ui/badge";
import UserImg from "../ui/userImg";

type playerType = {
  name: string;
  badge: "ROCKIE" | "SILVER" | "GOLDEN" | "DIAMOND" | "PLATINIUM";
  score: number;
  image: string | null;
  rank: number;
};

const PlayerCard = ({ name, badge, score, image, rank }: playerType) => {
  return (
    <div
      className="py-6 px-6 border border-1 border-clrSecondaryGrey 
    flex flex-wrap w-full justify-between max-w-[30rem]
     rounded-2xl text-mediumFnt mb-4 gap-2"
    >
      <div className="flex gap-4 items-center  flex-wrap">
        <p>{rank}</p>
        <UserImg src={image} />
        <p>{name}</p>
      </div>
      <div className="flex gap-4 items-center  flex-wrap">
        <p>{score}</p>
        <Badge badge={badge} />
      </div>
    </div>
  );
};

export default PlayerCard;
