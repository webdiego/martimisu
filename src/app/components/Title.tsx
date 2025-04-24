"use client";
import { motion, stagger } from "framer-motion";

export function Title() {
  const words = "Martimisu";
  const letters = words.split("");

  const textVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    }),
  };

  return (
    <div className="flex justify-center">
      <motion.h1 className="text-7xl md:text-9xl font-bold tracking-tight sm:text-9xl font-gaegu text-gray-800 text-center drop-shadow-sm md:leading-[5rem] uppercase">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={textVariant}
            initial="initial"
            animate="animate"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
