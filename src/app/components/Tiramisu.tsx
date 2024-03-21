import React from "react";

export default function Tiramisu() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-3 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold">Our selection</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          voluptates doloribus ipsum perspiciatis nemo saepe? Perspiciatis error
          aspernatur illum nesciunt alias, nisi itaque dolorem
        </p>
      </div>
      <div className="max-w-5xl mx-auto items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20  px-3">
          <div className="bg-blue-200 h-96 w-full md:order-first order-last"></div>
          <div className="h-96 p-5">
            <h1 className="text-5xl">Classic tiramisu</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, alias?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-5 h-96 order-first md:order-last">
            <h1 className="text-4xl">PistacchioMisu</h1>
          </div>
          <div className="bg-green-200 h-96 w-full md:order-last order-first"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-orange-200 h-96 w-full md:order-first order-last"></div>
          <div className="p-5 h-96">
            <h1 className="text-4xl">Lemonsu</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
