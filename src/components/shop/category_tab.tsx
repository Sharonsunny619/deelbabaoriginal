"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { categories } from "./data";

export default function CategoryTab() {
  const router = useRouter();

  const handleCategoryClick = (id: number) => {
    router.push(`/shop/${id}`);
  };

  return (
   <div className="bg-[#fdfdf6] py-6 px-2">
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden text-black overflow-x-auto">
    <div className="flex md:justify-between items-center md:flex-nowrap whitespace-nowrap">
      {categories.map((cat, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(cat.id)}
          className="flex-shrink-0 md:flex-1 flex flex-col hover:bg-gray-200 hover:scale-110 cursor-pointer items-center justify-center py-4 transition px-4"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-16 h-16 object-contain mb-2"
          />
          <span className="text-sm font-semibold text-center">{cat.name}</span>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}