import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function Title() {
  const words = "Martimisu";
  const letters = words.split("");
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    // const elements = containerRef.current.querySelectorAll("h1");

    // elements.forEach((element, i) => {
    //   tl.fromTo(
    //     element,
    //     {
    //       y: 50,
    //       opacity: 0,
    //     },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       duration: 0.5,
    //       ease: "elastic",
    //     }
    //   );
    // });
  }, []);

  return (
    <div className="flex justify-center" ref={containerRef}>
      {letters.map((letter, i) => (
        <h1
          key={i}
          className="text-7xl md:text-9xl font-bold tracking-tight sm:text-9xl font-gaegu text-gray-800 text-center drop-shadow-sm md:leading-[5rem] uppercase"
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </h1>
      ))}
    </div>
  );
}
