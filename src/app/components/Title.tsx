import { motion } from "framer-motion";

export function Title() {
  const words = "Martimisu";
  const letters = words.split("");

  const textVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={textVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className="text-7xl md:text-9xl font-bold tracking-tight sm:text-9xl font-gaegu text-gray-800 text-center drop-shadow-sm md:leading-[5rem] uppercase"
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
