"use client";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { products } from "@/components/home/data";
import { addToCart } from "@/app/lib/cartSlice";
import { useDispatch } from "react-redux";
import ProductCard from "@/components/common/product_card";

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
    <section className="py-10 px-15">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-4 text-black">
        Similar Products
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

        <div className="overflow-x-hidden py-4 bg-[#fffef4]" ref={emblaRef}>
          <div className="flex">
            {products.map((product, index) => (
              <div className="min-w-[260px] mr-4" key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

 