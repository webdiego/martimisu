import React from "react";
import S_6 from "./shapes/S_6";
import Image from "next/image";
export default function BehindScene() {
  return (
    <div
      id="behind"
      className="max-w-5xl mx-auto px-5 flex flex-col items-center pt-36 relative"
    >
      <div className="absolute right-0 -bottom-40 -z-[10]">
        <S_6 className="fill-sky-200 w-44 h-44 opacity-80 " />
      </div>
      <h3 className="text-4xl md:text-6xl font-gaegu font-bold text-center uppercase">
        Behind savoiardi and mascarpone
      </h3>

      <Image
        src="/marti.jpeg"
        alt="marti"
        width={500}
        height={500}
        priority
        className="mt-10 rounded-full h-56 w-56 object-cover object-left"
      />
      <div className="mt-8 text-center mx-auto max-w-2xl text-gray-700">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, a
          magnam! Pariatur laborum non error at assumenda nisi qui impedit.
        </p>
        <p className="mt-2 ">
          Quibusdam cumque quae asperiores suscipit nam aut libero animi nihil
          laudantium magni.
        </p>
      </div>
    </div>
  );
}
