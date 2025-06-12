"use client";

import React from "react";
import Image from "next/image";
import { professionals } from "./data";
import { useRouter } from "next/navigation";
import { BannerSection } from "../common/threegrid_banner_card";


export default function ServiceGrid() {
  const gridItems = [];
  let i = 0;
  const router = useRouter();
  while (i < professionals.length) {
    const item = professionals[i];
    const handleCardClick = () => {
      router.push(`/services/${item?.id}`);
    };

    const handleInteractiveClick = (e) => {
      e.stopPropagation();
    };
    if (item.type === "service") {
      gridItems.push(
        <div
          key={item.id}
          onClick={handleCardClick}
          className="bg-white hover:scale-105 transition-transform duration-300 rounded-3xl shadow-xl h-72 sm:h-80 md:h-[300px] p-4 sm:p-6 flex flex-col items-center   "
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative overflow-hidden rounded-full mb-3 sm:mb-4">
            <Image
              src={item.image}
              alt={item.name}
              fill={true}
              className="object-cover"
            />
          </div>
          <p className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-black text-center">
            {item.name}
          </p>
          <div className="flex gap-2 sm:gap-3 md:gap-4 mt-auto">
            <button
              onClick={handleInteractiveClick}
              className="px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-1 cursor-pointer transition duration-300 active:scale-90 bg-[#689567] text-white hover:bg-black font-semibold text-xs sm:text-sm rounded-md"
            >
              Work
            </button>
            <button
              onClick={handleInteractiveClick}
              className="px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-1 cursor-pointer duration-300 active:scale-90 border border-[#689567] text-black rounded-md hover:bg-[#689567] font-semibold text-xs sm:text-sm hover:text-white transition"
            >
              Hire
            </button>
          </div>
        </div>
      );
      i++;
    } else if (item.type === "banner") {
      const banners = [];
      while (i < professionals.length && professionals[i].type === "banner") {
        banners.push(professionals[i]);
        i++;
      }

      gridItems.push(
        <BannerSection key={`banner-${banners[0].id}`} items={banners} />
      );
    }
  }

  return (
    <div className="py-6 px-12  min-[450px]:px-12 min-[770px]:px-18 min-[1100px]:px-22 min-[1600px]:px-60">
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 min-[770px]:grid-cols-3 min-[1100px]:grid-cols-4 min-[1600px]:grid-cols-5 gap-6 min-[450px]:gap-8 min-[770px]:gap-10 min-[1700px]:gap-15">
        {gridItems}
      </div>
    </div>
  );
}
