import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, Filter } from "lucide-react";
import FlowerCard from "../Components/ui/FlowerCard";
import pinkFlower from "../asset/Rectangle 58.svg";
import pinkFlower2 from "../asset/Rectangle 59.svg";
import Sunflower from "../asset/Rectangle 60.svg";
import WhiteLoutos from "../asset/Rectangle 61.svg";

function Shop() {
  return (
    <section className="max-w-6xl flex flex-col mx-auto py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6">
      {/* Search Bar */}
      <div className="mb-4 sm:mb-6">
        <div className="w-full bg-white shadow-sm py-3 sm:py-4 px-3 sm:px-4 md:px-6 rounded">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4">
              <button
                className="flex items-center gap-1 text-orange-500 md:hidden"
              >
                <Filter size={16} className="sm:size-18" />
              </button>

              <div className="hidden md:flex items-center gap-1 text-orange-500">
                <Filter size={18} />
                <span className="font-medium">Filtering</span>
              </div>

              <div className="relative w-full md:mx-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-1.5 sm:py-2 px-3 sm:px-4 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <Search size={16} />
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                </svg>
                <span className="font-medium text-sm sm:text-base">Cheep</span>
              </div>
            </div>

              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-md shadow-inner md:hidden">
                <h3 className="font-medium mb-2 text-sm sm:text-base">
                  Filter Options
                </h3>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center">
                    <input type="checkbox" id="option1" className="mr-2" />
                    <label htmlFor="option1">Price (Low to High)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="option2" className="mr-2" />
                    <label htmlFor="option2">Rating (High to Low)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="option3" className="mr-2" />
                    <label htmlFor="option3">Distance</label>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8 lg:px-10">
        {[
          pinkFlower,
          pinkFlower2,
          Sunflower,
          WhiteLoutos,
          pinkFlower,
          pinkFlower2,
          Sunflower,
          WhiteLoutos,
        ].map((img, index) => (
          <div key={index} className="w-full flex justify-center">
            <div className="w-full max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[250px]">
              <FlowerCard img={img} price="$3" className="h-auto w-full">
                {`p${index + 1}`}
              </FlowerCard>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Shop;

