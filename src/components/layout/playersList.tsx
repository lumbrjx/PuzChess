"use client";
import PlayerCard from "./playerCard";
type playersType = {
  players:
    | {
        name: string;
        badge: string;
        score: number;
        image: string | null;
      }[]
    | undefined;
};

const PlayersList = ({ players }: playersType) => {
  return (
    <div className="w-full max-w-[30rem]">
      {players?.map((player, index: number) => (
        <div key={index}>
          <PlayerCard
            name={player.name}
            badge={player.badge}
            score={player.score}
            image={player.image}
          />
        </div>
      ))}
    </div>
  );
};

export default PlayersList;
