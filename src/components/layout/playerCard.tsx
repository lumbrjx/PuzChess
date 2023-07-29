import UserImg from "../ui/userImg";

type playerType = {
  name: string;
  badge: string;
  score: number;
  image: string | null;
};

const PlayerCard = ({ name, badge, score, image }: playerType) => {
  return (
    <div
      className="py-6 px-6 border border-1 border-clrSecondaryGrey 
    flex flex-wrap w-full justify-between max-w-[30rem]
     rounded-2xl text-mediumFnt mb-4 gap-2"
    >
      <div className="flex gap-4 items-center  flex-wrap">
        <UserImg src={image} />
        <p>{name}</p>
      </div>
      <div className="flex gap-4 items-center  flex-wrap">
        <p>{score}</p>
        <p>{badge}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
