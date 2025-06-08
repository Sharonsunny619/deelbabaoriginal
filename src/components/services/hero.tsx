"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Services from "./images/Our-Services2.jpg";
 
export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src={Services}
        alt="Services"
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

          <div className="  hover:text-gray-300 bg-white/20 cursor-pointer border-white hover:bg-transparent  border-l-[1px] text-white px-5 py-[14px] flex items-center justify-center rounded-r-full">
            <FaSearch />
          </div>
        </div>
      </div>

   
    </section>
  );
}
