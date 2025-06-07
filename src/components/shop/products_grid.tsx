"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { ShoppingCart } from "lucide-react";
import { products } from "./data";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/cartSlice";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, image, price, originalPrice, discount, rating } = product;
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedSize] = useState<string | null>(null);

  const handleCardClick = () => {
    router.push(`/shop/null/${product?.id}`);
  };

  const handleInteractiveClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={handleCardClick}
      className=" hover:scale-107 hover:shadow-2xl flex  flex-col items-center  justify-center bg-white rounded-[22px] w-[260px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)]"
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

      <div className="flex flex-col gap-[2px]  px-0">
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
        <Button
          onClick={() => {
            dispatch(
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: image.props.src.src,
                quantity: 1,
                size: selectedSize,
              })
            );
          }}
          className="border-[1.5px] hover:bg-white bg-white border-[#689567] cursor-pointer transition duration-300 active:scale-95 rounded-[15px] w-[30px] h-[30px] p-1.5 flex items-center justify-center"
        >
          <ShoppingCart className="text-[#689567] w-[22px] h-[22px]" />
        </Button>
      </div>
    </div>
  );
};

const BannerCard = ({ item }) => {
  return (
    <div className="bg-white rounded-[22px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)] flex items-center justify-between p-4 col-span-3 h-full relative">
      {item.image}
      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 rounded-[22px]"></div>

      <div className="flex flex-col gap-2 z-10">
        <span className="text-2xl font-semibold text-white">{item.name}</span>
        <span className="text-3xl font-bold text-yellow-300">
          {item.discount}% Off
        </span>
        <button className="bg-[#689567] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] px-6 py-1 hover:opacity-70 w-fit">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default function ProductsGrid() {
  return (
    <section className="py-10 px-72 ">
      <div className="grid grid-cols-5 gap-11 ">
        {products.map((item, index) => (
          <div
            key={index}
            className={
              item.type === "banner" ? "col-span-3" : "flex justify-center"
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
