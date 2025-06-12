"use client";

import React from "react";

import { products } from "./data";

import ProductCard from "../common/product_card";
import Image from "next/image";

const BannerCard = ({ item }) => {
  return (
    <div className="bg-white  rounded-[22px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)] flex items-center justify-between   col-span-3 min-[2000px]:mx-8 min-[2000px]:h-full   max-[2000px]:aspect-[17/9] max-[2000px]:overflow-hidden relative">
    

    <Image
        src={item.image}
        alt="productbanner1"
           fill={true}
        className="object-cover rounded-[22px] min-[2000px]:visible   "
      />
 

      <div className="absolute inset-0 bg-black/30 rounded-[22px]"></div>

      <div className="flex flex-col gap-2 z-10">
        <button className="absolutebg-[#689567] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] px-6 py-1 hover:opacity-70 w-fit">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default function ProductsGrid() {
  return (
    <section className="py-6 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-24">
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[770px]:grid-cols-3 min-[1100px]:grid-cols-4 min-[1300px]:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
        {" "}
        {products.map((item, index) => (
          <div
            key={index}
            className={
              item.type === "banner"
                ? "col-span-1 min-[500px]:col-span-2 min-[700px]:col-span-3 min-[900px]:col-span-3"
                : "flex justify-center"
            }
          >
            {item.type === "product" ? (
              <ProductCard product={item} />
            ) : (
              <BannerCard item={item} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
