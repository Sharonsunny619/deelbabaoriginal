"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { ShoppingCart } from "lucide-react";
import { products } from "./data";

// ProductCard component (reused from the first code)
const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, image, price, originalPrice, discount, rating } = product;

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-[22px] w-[250px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)]">
      <div className="relative inline-block w-full">
        {image} 
        <span className="absolute top-[12px] left-[20px] flex justify-between items-center w-[80%]">
          <div className="bg-white flex items-center rounded px-2 py-[2px] shadow">
            <span className="font-bold m-0">{rating}</span>
            <FaStar className="ml-2 text-yellow-500 text-xs" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-white shadow-[0px_0px_14px_5px_#0000001A] relative">
            {isFavorite ? (
              <IoIosHeart
                className="absolute left-[10px] top-[11px] text-[#3c693b] w-5 h-5 cursor-pointer"
                onClick={() => setIsFavorite(false)}
              />
            ) : (
              <IoIosHeartEmpty
                className="absolute left-[10px] top-[11px] text-[#3c693b] w-5 h-5 cursor-pointer"
                onClick={() => setIsFavorite(true)}
              />
            )}
          </div>
        </span>
      </div>

      <div className="flex flex-col gap-[2px] text-left px-0">
        <span className="text-lg font-medium text-gray-500 mb-0">{name}</span>
        <span className="text-sm text-gray-500">Lorem Ipsum Dolor Sit Amet</span>
        <div className="flex gap-0.5 mt-1 text-sm text-left">
          <b className="text-black font-semibold">₹{price}</b>
          <s className="text-[#616161]">₹{originalPrice}</s>
          <span className="text-red-600">{discount}</span>
        </div>
      </div>

      <div className="flex gap-2 items-center px-2 pb-2">
        <button className="bg-[#689567] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] px-9 py-2 hover:opacity-70">
          Buy Now
        </button>
        <Button className="border-[1.5px] hover:bg-white bg-white border-[#689567] cursor-pointer transition duration-300 active:scale-95 rounded-[15px] w-[37px] h-[37px] p-1.5 flex items-center justify-center">
          <ShoppingCart className="text-[#689567] w-[22px] h-[22px]" />
        </Button>
      </div>
    </div>
  );
};

// const BannerCard = () => {
//   return (
//     <div className="bg-white rounded-[22px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)] flex items-center justify-between p-4 col-span-3">
//       <div className="flex flex-col gap-2">
//         <span className="text-2xl font-semibold text-black">Adidas Outlet</span>
//         <span className="text-3xl font-bold text-yellow-500">50% Off</span>
//         <button className="bg-[#689567] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] px-6 py-2 hover:opacity-70 w-fit">
//           Buy Now
//         </button>
//       </div>
//       <img
//         src="/adidas-banner-image.jpg" // Replace with actual image path
//         alt="Adidas Outlet"
//         className="w-[150px] h-[100px] object-cover rounded-md"
//       />
//     </div>
//   );
// };

export default function ProductsGrid() {
  return (
    <section className="py-10 px-10">
      <h2 className="text-3xl font-semibold mb-6 flex items-center gap-4 text-black">
        <span className="flex-1 h-px bg-gray-300"></span>
        Products <span className="text-[#689567]">Grid</span>
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {products.slice(0, 8).map((product, index) => (
          <div key={index} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
        {/* <BannerCard /> */}
      </div>
    </section>
  );
}