"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { users } from "./data";
import PromoCarousel from "@/components/home/promo_carousal";
import { useRouter } from "next/navigation";

// Define types for clarity
interface User {
  id: number;
  name: string;
  image: string;
  type: "service" | "banner";
  rating?: number;
  worksCompleted?: number;
  location?: string;
  kmAway?: number;
}

// ServiceCard component for individual service items
const ServiceCard = ({ user, category }: { user: User; category: any }) => {
  const router = useRouter();
  return (
    <div className="rounded-[20px] overflow-hidden shadow-xl border bg-[#F4F7EC] flex flex-col items-center h-96 sm:h-[420px] md:h-[450px] w-full max-w-sm mx-auto">
      {/* Top Green Header */}
      <div className="relative bg-[#689567] h-24 sm:h-28 md:h-[120px] w-full flex items-center justify-center text-white font-semibold text-base sm:text-lg">
        <div className="flex items-center justify-center flex-col mt-2">
          <p className="relative z-10 -mb-4 sm:-mb-5 opacity-75">Nurse</p>
          <p className="relative z-10 text-3xl sm:text-4xl md:text-[52px] opacity-15">Deelbaba</p>
        </div>
      </div>
      <div className="relative bg-[#689567] h-14 sm:h-16 md:h-[60px] w-28 sm:w-32 md:w-[130px] rounded-b-full flex items-center justify-center text-white font-semibold text-base sm:text-lg">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 -mt-12 sm:-mt-14 md:-mt-18 z-10 relative rounded-full overflow-hidden border-none shadow">
          <Image
            src={user.image}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-2 text-center px-3 sm:px-4 pb-4 flex flex-col items-center flex-1">
        <h3 className="font-semibold text-black text-sm sm:text-base md:text-lg">{user.name}</h3>

        {/* Dynamic stars based on rating */}
        <div className="flex items-center justify-center gap-1 text-yellow-500 my-1 sm:my-2">
          {[...Array(5)].map((_, i) =>
            i < Math.round(user.rating || 0) ? (
              <FaStar key={i} size={12} className="sm:h-4 sm:w-4" />
            ) : (
              <FaRegStar key={i} size={12} className="sm:h-4 sm:w-4" />
            )
          )}
        </div>

        <p className="text-xs sm:text-sm text-black mt-3 sm:mt-4">{user.location}</p>
        <p className="text-xs sm:text-sm text-black">{user.kmAway}km Away</p>
        <p className="text-xs sm:text-sm text-black">{user.worksCompleted} Works Completed</p>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-auto w-full px-2 sm:px-0">
          <button
            onClick={() => {
              router.push(`/services/${category?.id}/${user.id}`);
            }}
            className="px-10 sm:px-8 md:px-5 lg:px-10 xl:px-20 h-8 sm:h-9 cursor-pointer py-1 bg-[#689567] hover:bg-black text-white rounded-md text-xs sm:text-sm font-semibold transition duration-300 active:scale-95"
          >
            Schedule
          </button>
          <button className="px-10 whitespace-nowrap sm:px-8 md:px-5 lg:px-10 xl:px-20 h-8 sm:h-9 cursor-pointer py-1 border border-[#689567] text-[#689567] rounded-md text-xs sm:text-sm font-semibold hover:bg-[#689567] hover:text-white transition duration-300 active:scale-95">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ServiceCategory({ category }: { category: any }) {
  const gridItems: JSX.Element[] = [];
  let currentIndex = 0;

  while (currentIndex < users.length) {
    const item = users[currentIndex];

    if (item.type === "service") {
      gridItems.push(
        <div key={item.id} className="flex justify-center">
          <ServiceCard user={item} category={category} />
        </div>
      );
      currentIndex++;
    } else if (item.type === "banner") {
      const bannerItems: User[] = [];
      while (
        currentIndex < users.length &&
        users[currentIndex].type === "banner"
      ) {
        bannerItems.push(users[currentIndex]);
        currentIndex++;
      }
      gridItems.push(
        <div key={`banner-${bannerItems[0].id}`} className="col-span-full">
          <PromoCarousel />
        </div>
      );
    }
  }

  return (
    <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40">
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 min-[770px]:grid-cols-3 min-[1100px]:grid-cols-3 min-[1550px]:grid-cols-4  min-[1700px]:grid-cols-5 gap-6 sm:gap-8 md:gap-15">
        {gridItems}
      </div>
    </section>
  );
}