"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Shopbanner from "./images/shop-banner.webp";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src={Shopbanner}
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="z-11"
      />

      {/* White semi-transparent overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-30 z-10" />

      {/* Gradient overlay on top of white overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none" />

      {/* Search bar - absolutely positioned at the top center */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-30">
        <div className="flex items-center border border-white rounded-full  overflow-hidden shadow-md w-full">
          <input
            type="text"
            placeholder="Search Product and Services"
            className="flex-grow px-8 py-3 text-sm focus:bg-transparent focus:outline-none rounded-l-full placeholder-white text-white bg-white/20"
          />

          <div className="  hover:text-gray-300 bg-white/20 cursor-pointer border-white hover:bg-transparent  border-l-[1px] text-black px-5 py-[14px] flex items-center justify-center rounded-r-full">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* Content below search bar */}

      <div className="z-30 text-left w-full max-w-full px-32 mx-auto">
        <h1 className="text-4xl uppercase md:text-[40px] font-extrabold text-white ">
          End Of Season
        </h1>
        <h1 className="text-4xl uppercase md:text-[130px] font-extrabold text-white mb-2">
          SALE
        </h1>

        <h1 className="text-4xl uppercase md:text-[38px] font-extrabold text-white ">
          This Week Only
        </h1>
      </div>

      <div className="z-30 text-right gap-6 flex flex-col items-center w-full max-w-full  mx-auto px-30">
        <h1 className="text-4xl uppercase md:text-[60px] font-extrabold text-white ">
          FLAT 50% OFF
        </h1>
        <h1 className="text-4xl text-center  md:text-[30px] font-extrabold text-white mb-2">
          On Your First <br /> Purcherse
        </h1>

        <Button className="cursor-pointer gap-6  active:scale-95 bg-white hover:text-white text-[#890203] hover:bg-[#890203]   py-3 h-11 rounded-xl font-semibold transition duration-200">
          <div className="flex items-center justify-center gap-5 px-5">
            Explore
            <ArrowRight />
          </div>
        </Button>
      </div>
    </section>
  );
}
