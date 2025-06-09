"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { products } from "./data";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/cartSlice";
import Image from "next/image";

export default function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="py-10 px-0">
      <h2 className="text-3xl px-10 font-semibold mb-6 flex items-center gap-4 text-black">
        <span className="flex-1 h-px bg-gray-300"></span>
        Featured <span className="text-[#689567]">Products</span>
      </h2>

      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 w-8 h-10 cursor-pointer transition duration-300 active:scale-95 -translate-y-1/2 bg-white/60 p-2 rounded-r-md shadow hover:bg-gray-100 z-10 flex items-center justify-center"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 w-8 h-10 cursor-pointer transition duration-300 active:scale-95 -translate-y-1/2 bg-white/60 p-2 rounded-l-md shadow hover:bg-gray-100 z-10 flex items-center justify-center"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        <div className="  py-2 bg-[#fffef4]" ref={emblaRef}>
          <div className="flex">
            {products.map((product, index) => (
              <div className="min-w-[250px] mx-5" key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const [selectedSize] = useState<string | null>(null);
  const dispatch = useDispatch();

  const { name, image, price, originalPrice, discount, rating } = product;
  const handleCardClick = () => {
    router.push(`/shop/null/${product?.id}`);
  };

  const handleInteractiveClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={handleCardClick}
      className="hover:scale-104 hover:shadow-2xl flex flex-col items-center  justify-center bg-white rounded-[23px]  shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)]"
    >
      <div className="relative inline-block w-full">
        <div className="relative w-full h-[270px]">
          <Image
            src={image}
            alt="Purchase"
            fill
            className="object-cover rounded-[20px]"
            priority
          />
        </div>{" "}
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

    <div className="flex flex-col gap-0 items-start px-3 sm:px-4   w-full">
        <span className="text-lg font-medium text-black mb-0 mt-2">{name}</span>
        <span className="text-[14px]   text-[#919191] truncate font-[510px]">
          Lorem Ipsum Dolor Sit Amet
        </span>
        <div className="flex gap-0.5 mt-1 text-sm text-left">
          <b className="text-black font-semibold">₹{price}</b>
          <s className="text-[#616161]">₹{originalPrice}</s>
          <span className="text-red-600">{discount}</span>
        </div>
      </div>

      <div
        onClick={handleInteractiveClick}
        className="flex gap-7 items-center px-2 pb-2 mt-2 mb-1"
      >
        <button
          onClick={() => router.push("/payment-page")}
          className="bg-[#689567] text-[14px] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[13px] px-12 py-[5px] hover:opacity-70"
        >
          Buy Now
        </button>
        <Button
          onClick={() => {
            dispatch(
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
                size: selectedSize,
              })
            );
          }}
          className="border-[1.5px]  hover:bg-white bg-white border-[#689567] cursor-pointer transition duration-300 active:scale-95 rounded-[15px] w-[31px] h-[31px] p-1.5 flex items-center justify-center"
        >
          <ShoppingCart className="text-[#689567] w-[22px] h-[22px]" />
        </Button>
      </div>
    </div>
  );
};
