"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { customAnimation } from "@/lib/hooks/animation/animations";

export default function Loading() {
  const { loadingAnimation } = customAnimation();
  document.body.style.overflow = "hidden";
  return (
    <div
      className="py-96 absolute bg-header -z-30
   "
    >
      <motion.div
        initial={loadingAnimation.initial}
        animate={loadingAnimation.inInitial}
        transition={{ yoyo: Infinity }}
      >
        <Image alt="logo" src={"/Logo.svg"} width={60} height={60} priority />
      </motion.div>
    </div>
  );
}
