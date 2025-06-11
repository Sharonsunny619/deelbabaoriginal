"use client";

import React, { useState } from "react";
 
import { products } from "./data";
 
 import { Category, CategoryType } from "./interface";
 import ProductCard from "../../common/product_card";
import Image from "next/image";



const BannerCard = ({ item }) => {
  return (
    <div className="bg-white  rounded-[22px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)] flex items-center justify-between p-4 h-full relative">
     <Image
             src={item.image}
             alt="productbanner1"
                fill={true}
             className="object-cover rounded-[22px]"
           />
      <div className="absolute inset-0 bg-black/30 rounded-[22px]"></div>
      <div className="flex flex-col gap-2 z-10">
        <span className="text-2xl font-semibold text-white">{item.name}</span>
        <span className="text-3xl font-bold text-yellow-300">
          {item.discount}% Off
        </span>
        <button
          className="bg-[#689567] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] px-6 py-1 hover:opacity-70 w-fit"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

const BannerSection = ({ items }) => {
  return (
    <div className="grid shadow grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {items.map((item) => (
        <BannerCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default function ProductsGrid({
  tabcategory,
  shopcategory,
}: {
  tabcategory: Category;
  shopcategory: CategoryType;
}) {
  let gridItems = [];
  let currentIndex = 0;

  while (currentIndex < products.length) {
    const item = products[currentIndex];

    if (item.type === "product") {
      gridItems.push(
        <div key={item.id} className="flex justify-center">
          <ProductCard product={item} shopcategory={shopcategory} />
        </div>
      );
      currentIndex++;
    } else if (item.type === "banner") {
      const bannerItems = [];
      while (
        currentIndex < products.length &&
        products[currentIndex].type === "banner"
      ) {
        bannerItems.push(products[currentIndex]);
        currentIndex++;
      }
      gridItems.push(
        <div
          key={`banner-${bannerItems[0].id}`}
          className="col-span-1 shadow-lg  min-[500px]:col-span-2 min-[770px]:col-span-3 min-[1100px]:col-span-4 min-[1300px]:col-span-5 mx-6"
        >
          <div className="bg-white p-3 sm:p-4 rounded-[22px]">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-start">
              You Might Be Interested In
            </h2>
            <BannerSection items={bannerItems} />
          </div>
        </div>
      );
    }
  }

  return (
    <section className="py-6 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-24">
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[770px]:grid-cols-3 min-[1100px]:grid-cols-4 min-[1300px]:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
        {gridItems}
      </div>
    </section>
  );
}