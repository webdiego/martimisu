"use client";
import { Title } from "./Title";
import { motion } from "framer-motion";
import { CircleArrowDown } from "lucide-react";

export default function Hero() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const variantY = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl h-full">
        <div className="text-center h-full flex flex-col items-center justify-between">
          <div className=""></div>
          <div className="self-center§ pt-10">
            <Title />
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1 }}
              variants={variants1}
              className="flex flex-col items-center h-full"
            >
              <p className="mt-4 text-2xl leading-8 text-gray-600 font-medium font-gaegu">
                Discover the Artisanal Paradise of Our Tiramisu!
              </p>
              {/* <p className="mt-2 text-base leading-8 text-gray-600">
              Indulge in our artisanal tiramisu: a decadent delight crafted with
              authentic Italian tradition and the finest ingredients.
            </p> */}
            </motion.div>
          </div>
          <motion.a
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 2 }}
            variants={variantY}
            href="#tiramisu"
          >
            <CircleArrowDown
              strokeWidth={1.5}
              strokeLinecap="round"
              className="animate-bounce w-8 h-8 text-gray-700 mt-44"
            />
          </motion.a>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
