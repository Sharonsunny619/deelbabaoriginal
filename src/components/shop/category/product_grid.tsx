
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
      className="flex flex-col items-center justify-center bg-white hover:scale-105 hover:shadow-2xl rounded-[22px] w-full max-w-[260px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[260px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)] transition-transform duration-300"
    >
      <div className="relative inline-block w-full h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] overflow-hidden rounded-t-[22px]">
        <img src={image.props.src.src} alt={name} className="w-full h-full object-cover" />
        <span className="absolute top-[12px] left-[12px] flex justify-between items-center w-[calc(100%-24px)]">
          <div className="bg-white flex items-center rounded px-2 py-[2px] shadow">
            <span className="font-bold text-sm">{rating}</span>
            <FaStar className="ml-1 text-yellow-500 text-xs" />
          </div>
          <div
            onClick={handleInteractiveClick}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0px_0px_14px_5px_#0000001A] relative"
          >
            {isFavorite ? (
              <IoIosHeart
                className="absolute left-[25%] top-[25%] text-[#3c693b] w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                onClick={() => setIsFavorite(false)}
              />
            ) : (
              <IoIosHeartEmpty
                className="absolute left-[25%] top-[25%] text-[#3c693b] w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                onClick={() => setIsFavorite(true)}
              />
            )}
          </div>
        </span>
      </div>

      <div className="flex flex-col gap-1 px-3 sm:px-4 py-2">
        <span className="text-base sm:text-lg font-medium text-gray-500 truncate">{name}</span>
        <span className="text-xs sm:text-sm text-gray-500 truncate">Lorem Ipsum Dolor Sit Amet</span>
        <div className="flex gap-1 mt-1 text-xs sm:text-sm text-left">
          <b className="text-black font-semibold">₹{price}</b>
          <s className="text-[#616161]">₹{originalPrice}</s>
          <span className="text-red-600">{discount}% OFF</span>
        </div>
      </div>

      <div
        onClick={handleInteractiveClick}
        className="flex gap-2 items-center px-3 sm:px-4 pb-3 mt-1 w-full"
      >
        <button
          onClick={() => router.push("/payment-page")}
          className="bg-[#689567] text-xs sm:text-sm cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] px-6 sm:px-8 py-1.5 hover:opacity-70 flex-1"
        >
          Buy Now
        </button>
        <button
          className="border-[1.5px] hover:bg-white bg-white border-[#689567] cursor-pointer transition duration-300 active:scale-95 rounded-[15px] w-8 h-8 sm:w-10 sm:h-10 p-1.5 flex items-center justify-center"
        >
          <ShoppingCart className="text-[#689567] w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

const BannerCard = ({ item }) => {
  return (
    <div className="relative bg-white rounded-[22px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)] h-[150px] sm:h-[180px] md:h-[200px] overflow-hidden">
      <img src={item.image.props.src.src} alt={item.name} className="absolute inset-0 w-full h-full object-cover rounded-[22px]" />
      <div className="absolute inset-0 bg-black/30 rounded-[22px]"></div>
      <div className="absolute inset-0 flex flex-col justify-end items-start p-4 sm:p-6 z-10">
        <button
          className="bg-[#000] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] text-xs sm:text-sm px-4 py-1 hover:opacity-70 w-fit"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

const BannerSection = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
        <div key={`banner-${bannerItems[0].id}`} className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
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
    <section className="py-6 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-48">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
        {gridItems}
      </div>
    </section>
  );
}