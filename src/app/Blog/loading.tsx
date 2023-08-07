"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { customAnimation } from "@/lib/hooks/animation/animations";

export default function Loading() {
  const { loadingAnimation } = customAnimation();
  document.body.style.overflow = "hidden";
  return (
    <div
      className="py-56  flex w-full h-screen flex-col  items-center justify-center bg-header 
"
    >
      <motion.div
        initial={loadingAnimation.initial}
        animate={loadingAnimation.inInitial}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        <Image alt="logo" src={"/Logo.svg"} width={60} height={60} priority />
      </motion.div>
    </div>
  );
}
