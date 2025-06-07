"use client";

import React from "react";
import Image from "next/image";
import { professionals } from "./data";
import { useRouter } from "next/navigation";

const BannerCard = ({ item }) => {
  return (
    <div className="relative bg-white rounded-none shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)] h-[270px] overflow-hidden">
      {/* Background Image */}
      <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-black/10 "></div>
      <div className="absolute inset-0 flex flex-col justify-end items-center p-6 z-10">
        <button className="mt-4 bg-[#000] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] text-[14px] px-4 py-1 hover:opacity-70 w-fit">
          Buy Now
        </button>
      </div>
    </div>
  );
};

const BannerSection = ({ items }) => {
  return (
    <div className="col-span-full bg-white p-0  rounded-[22px]">
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <BannerCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

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
          className="bg-white hover:scale-110  rounded-3xl shadow-xl h-[300px] p-6 flex flex-col items-center"
        >
          <div className="w-32 h-32 relative overflow-hidden rounded-full mb-4">
            <Image
              src={item.image}
              alt={item.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-lg font-bold mb-4 text-black">{item.name}</p>
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleInteractiveClick}
              className="px-6 py-1 cursor-pointer transition duration-300 active:scale-90 bg-[#689567] text-white hover:bg-black font-semibold text-[14px] rounded-md"
            >
              Work
            </button>
            <button
              onClick={handleInteractiveClick}
              className="px-6 py-1 cursor-pointer duration-300 active:scale-90 border border-[#689567] text-black rounded-md hover:bg-[#689567] font-semibold text-[14px] hover:text-white transition"
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
    <div className="py-6 px-52">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
        {gridItems}
      </div>
    </div>
  );
}
