import React from "react";

export default function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto px-3 flex flex-col items-center mt-36 ">
      <h3 className="text-4xl md:text-6xl font-gaegu font-bold text-center">
        Greedy testimonials
      </h3>
      <div className="flex flex-row mt-20 divide-x-2 p-2 ">
        <div className="flex flex-col items-start ">
          <p className="text-gray-700">
            “Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
            Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus
            tortor consequat at. Vulputate gravida sociis enim nullam ultricies
            habitant malesuada lorem ac. Tincidunt urna dui pellentesque
            sagittis.”
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="bg-sky-500 h-10 w-10 text-center rounded-full flex items-center justify-center mr-2">
              <p>D</p>
            </div>
            <div>
              <p className="font-bold">Diego</p>
              <p className="text-sm text-gray-600">Lemonsu</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start pl-4">
          <p className="text-gray-700">
            “Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
            Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus
            tortor consequat at. Vulputate gravida sociis enim nullam ultricies
            habitant malesuada lorem ac. Tincidunt urna dui pellentesque
            sagittis.”
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="bg-purple-500 h-10 w-10 text-center rounded-full flex items-center justify-center mr-2">
              <p>A</p>
            </div>
            <div>
              <p className="font-bold">Diego</p>
              <p className="text-sm text-gray-600">Classic Tiramisu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
