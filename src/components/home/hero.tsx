"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import bench from "./images/bench.png";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src={bench}
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="z-11"
      />

      {/* White semi-transparent overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-30 z-10" />

      {/* Gradient overlay on top of white overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(90.66deg, #000000 0.55%, rgba(44, 44, 44, 0.4) 28.21%, rgba(175, 175, 175, 0.15) 75.62%, rgba(3, 3, 3, 0) 86.89%)",
        }}
      />

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

      <div className="z-30 text-left w-full max-w-full px-32 mx-auto ">
        <Button className="cursor-pointer lg:relative lg:ml-10 absolute bottom-30 lg:-bottom-30 right-10  active:scale-95 bg-[#689567] text-white px-24  md:px-40 py-3 h-10 rounded-xl font-semibold transition duration-200">
          Explore
        </Button>
      </div>
    </section>
  );
}
