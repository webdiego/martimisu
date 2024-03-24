import React from "react";
import S_2 from "./shapes/S_2";
import S_1 from "./shapes/S_1";
import S_3 from "./shapes/S_3";

export default function Tiramisu() {
  return (
    <div id="tiramisu" className="pt-10">
      <div className="max-w-5xl mx-auto px-5 flex flex-col items-center">
        <h3 className="text-4xl md:text-6xl font-gaegu font-bold uppercase">
          Our tiramisu
        </h3>
        <p className="text-center mt-2 text-gray-700">
          Indulge in the unparalleled richness of our artisanal tiramisu,
          meticulously crafted with the finest ingredients and authentic Italian
          tradition, ensuring each bite is a symphony of flavor and love.
        </p>
      </div>
      <div className="max-w-5xl mx-auto items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-32 px-5">
          <div className="h-96 w-full md:order-first order-last">
            <S_1 className="fill-red-200 max-w-lg mx-auto" />
          </div>
          <div className="h-96 flex flex-col items-center justify-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-gaegu font-bold text-gray-800">
              Classic tiramisu
            </h1>
            <p className="text-gray-600 mt-4">
              Savor the heavenly allure of classic tiramisu: espresso-drenched
              ladyfingers embrace layers of velvety mascarpone, crowned with a
              delicate dusting of cocoa.
            </p>
            <p className="text-gray-600 mt-2">
              Dive into a symphony of flavors that tantalize your taste buds
              with every blissful bite.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-5 mt-32">
          <div className="h-96 order-first md:order-last flex flex-col items-center justify-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-gaegu font-bold text-gray-800">
              Pistacchiomisu
            </h1>
            <p className="text-gray-600 mt-4">
              Delight in the nutty perfection of pistachio tiramisu:
              pistachio-laden ladyfingers embrace layers of luscious mascarpone,
              crafting a symphony of rich, earthy flavors.
            </p>
            <p className="text-gray-600 mt-2">
              Adorned with crushed pistachios, every spoonful is a decadent
              celebration of indulgence that will satisfy your cravings with
              each delightful bite.
            </p>
          </div>
          <div className=" h-96 w-full md:order-last order-first ">
            <S_2 className="fill-green-200" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-5 mt-32">
          <div className="h-96 w-full md:order-first order-last ">
            <S_3 className="fill-yellow-200" />
          </div>
          <div className="h-96 flex flex-col items-center justify-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-gaegu font-bold text-gray-800">
              Lemonsu
            </h1>
            <p className="text-gray-600 mt-4">
              Embrace the citrusy delight of lemon-infused tiramisu: zesty
              lemon-flavored ladyfingers intertwine with layers of creamy
              mascarpone, creating a harmonious burst of tangy sweetness. <br />
              Topped with a sprinkle of lemon zest, each bite is a refreshing
              journey of flavor that will leave you yearning for more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
