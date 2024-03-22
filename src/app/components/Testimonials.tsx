import React from "react";
import A_1 from "./avatars/A_1";
import A_2 from "./avatars/A_2";
export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="max-w-5xl mx-auto px-3 flex flex-col items-center pt-36 "
    >
      <h3 className="text-4xl md:text-6xl font-gaegu font-bold text-center uppercase">
        Greedy testimonials
      </h3>
      <p className="text-center mt-4 text-gray-700">
        These are some of happy customer that enjoyed the product
      </p>

      <div className="flex flex-col md:flex-row mt-20 p-2 max-w-4xl mx-auto gap-5">
        {/* First review */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <p className="text-gray-700 text-center md:text-left">
            “Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
            Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus
            tortor consequat at.”
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center mt-4">
            <div className=" h-10 w-10 rounded-full flex items-center justify-center md:mr-2">
              <A_1 />
            </div>
            <div className="flex flex-col items-center md:items-start justify-start md:justify-center">
              <p className="font-medium text-gray-800">Diego</p>
              <p className="text-xs text-gray-600">Enjoy: Lemonsu</p>
            </div>
          </div>
        </div>
        {/* Second review */}

        <div className="flex flex-col items-center md:items-start  w-full md:w-1/2 mt-20 md:mt-0 ">
          <p className="text-gray-700 text-center md:text-left">
            “Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
            Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus
            tortor consequat at. Vulputate gravida sociis enim nullam ultricies
            habitant malesuada lorem ac. Tincidunt urna dui pellentesque
            sagittis.”
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center mt-4">
            <div className=" h-10 w-10 rounded-full flex items-center justify-center md:mr-2">
              <A_2 />
            </div>
            <div className="flex flex-col items-center md:items-start justify-start md:justify-center">
              <p className="font-medium">Alex</p>
              <p className="text-xs text-gray-600">Ate: Lemonsu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
