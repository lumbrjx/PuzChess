"use client";

import PlayerCard from "./playerCard";
import { motion } from "framer-motion";
import { customAnimation } from "@/lib/hooks/animation/animations";
type playersType = {
  players:
    | {
        name: string;
        badge: "ROCKIE" | "SILVER" | "GOLDEN" | "DIAMOND" | "PLATINIUM";
        score: number;
        image: string | null;
      }[]
    | undefined;
};

const PlayersList = ({ players }: playersType) => {
  const { HeroAnimation } = customAnimation();
  return (
    <div className="w-full max-w-[30rem]">
      {players?.map((player, index: number) => (
        <motion.div
          initial={HeroAnimation.initial}
          animate={HeroAnimation.inInitial}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 0.95 }}
          key={index}
        >
          <PlayerCard
            rank={index + 1}
            name={player.name}
            badge={player.badge}
            score={player.score}
            image={player.image}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PlayersList;
