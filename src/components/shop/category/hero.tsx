"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Car from "./images/car_banner.jpg";
import Fashion from "./images/fashion.jpg";
import Mobile from "./images/mobile.jpg";
import Electronics from "./images/electronics.jpg";
import Health from "./images/health.jpg";
import SpareParts from "./images/istockphoto-1221301718-612x612.jpg";
import Appliances from "./images/appliances.webp";

import { CategoryType } from "./interface";

export default function CategoryHero({ category }: { category: CategoryType }) {
  console.log("category", category);

  let bannerImage = Fashion;

  switch (category.name.toLowerCase()) {
    case "hardwares":
      bannerImage = Car;
      break;
    case "mobiles":
      bannerImage = Mobile;
      break;
    case "fashion":
      bannerImage = Fashion;
      break;
    case "electronics":
      bannerImage = Electronics;
      break;
    case "beauty & health":
      bannerImage = Health;
      break;
    case "spare parts":
      bannerImage = SpareParts;
      break;
    default:
      bannerImage = Appliances;
  }

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src={bannerImage}
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

      <div className="absolute bottom-18 right-100 z-30">
        <Button className="cursor-pointer gap-6 active:scale-95 bg-white hover:text-white text-[#000] hover:bg-[#000] py-3 h-13 rounded-xl font-semibold transition duration-200">
          <div className="flex items-center justify-center gap-5 px-5">
            Explore
            <ArrowRight />
          </div>
        </Button>
      </div>
    </section>
  );
}
