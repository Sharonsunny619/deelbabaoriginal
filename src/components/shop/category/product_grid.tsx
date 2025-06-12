"use client";

import React from "react";

import { products } from "./data";

import { Category, CategoryType } from "./interface";
import ProductCard from "../../common/product_card";
import { BannerSection } from "@/components/common/threegrid_banner_card";
 
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
          className="col-span-1 shadow-lg  min-[500px]:col-span-2 min-[770px]:col-span-3 min-[1100px]:col-span-4 min-[1300px]:col-span-5"
        >
          <div className="bg-white p-3 sm:p-4 rounded-[22px]">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-start">
              You Might Be Interested In
            </h2>
            <BannerSection
              key={`banner-${bannerItems[0].id}`}
              items={bannerItems}
            />
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
