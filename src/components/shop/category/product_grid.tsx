"use client";

import { ShoppingCart } from "lucide-react";
import { products } from "./data";
import { FaStar } from "react-icons/fa";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { useState } from "react";
import { Category, CategoryType } from "./interface";
import { useRouter } from "next/navigation";

const ProductCard = ({ product, shopcategory }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, image, price, originalPrice, discount, rating } = product;
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/shop/${shopcategory?.id}/${product?.id}`);  
  };

  const handleInteractiveClick = (e) => {
    e.stopPropagation();  
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col items-center justify-center bg-white hover:scale-107 hover:shadow-2xl rounded-[22px] w-[260px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)]"
    >
      <div className="relative inline-block w-full h-[280px] overflow-hidden rounded-t-[22px]">
        {image}
        <span className="absolute top-[12px] left-[20px] flex justify-between items-center w-[80%]">
          <div className="bg-white flex items-center rounded px-2 py-[2px] shadow">
            <span className="font-bold m-0">{rating}</span>
            <FaStar className="ml-2 text-yellow-500 text-xs" />
          </div>
          <div
            onClick={handleInteractiveClick}
            className="w-[40px] h-[40px] rounded-full bg-white shadow-[0px_0px_14px_5px_#0000001A] relative"
          >
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
        <span className="text-sm text-gray-500">
          Lorem Ipsum Dolor Sit Amet
        </span>
        <div className="flex gap-0.5 mt-1 text-sm text-left">
          <b className="text-black font-semibold">₹{price}</b>
          <s className="text-[#616161]">₹{originalPrice}</s>
          <span className="text-red-600">{discount}% OFF</span>
        </div>
      </div>

      <div
        onClick={handleInteractiveClick}
        className="flex gap-2 items-center px-2 pb-2 mt-1"
      >
        <button onClick={()=> router.push("/payment-page")} className="bg-[#689567] text-[14px] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] px-12 py-1 hover:opacity-70">
          Buy Now
        </button>
        <button className="border-[1.5px] hover:bg-white bg-white border-[#689567] cursor-pointer transition duration-300 active:scale-95 rounded-[15px] w-[30px] h-[30px] p-1.5 flex items-center justify-center">
          <ShoppingCart className="text-[#689567] w-[22px] h-[22px]" />
        </button>
      </div>
    </div>
  );
};

const BannerCard = ({ item }) => {
  return (
    <div className="relative bg-white rounded-none shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)] h-[200px] overflow-hidden">
      {/* Background Image */}
      {item.image}
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 "></div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center p-6 z-10">
        <button  className="mt-4 bg-[#000] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] text-[14px] px-4 py-1 hover:opacity-70 w-fit">
          Buy Now
        </button>
      </div>
    </div>
  );
};

const BannerSection = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
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
  // Track the position in the grid
  let gridItems = [];
  let currentIndex = 0;

  // Iterate through products to build the grid
  while (currentIndex < products.length) {
    const item = products[currentIndex];

    if (item.type === "product") {
      // Add product card
      gridItems.push(
        <div key={item.id} className="flex justify-center">
          <ProductCard product={item} shopcategory={shopcategory} />
        </div>
      );
      currentIndex++;
    } else if (item.type === "banner") {
      // Collect all consecutive banner items
      const bannerItems = [];
      while (
        currentIndex < products.length &&
        products[currentIndex].type === "banner"
      ) {
        bannerItems.push(products[currentIndex]);
        currentIndex++;
      }
      // Add banner section spanning 5 columns
      gridItems.push(
        <div key={`banner-${bannerItems[0].id}`} className="col-span-5">
          <div className="bg-white p-4 rounded-[22px]  ">
            <h2 className="text-2xl font-semibold mb-4 text-start">
              You Might Be Interested In
            </h2>
            <BannerSection items={bannerItems} />
          </div>
        </div>
      );
    }
  }

  return (
    <section className="py-10 px-72">
      <div className="grid grid-cols-5 gap-15 ">{gridItems}</div>
    </section>
  );
}
