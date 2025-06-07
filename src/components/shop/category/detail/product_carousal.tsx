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

        <div className="overflow-x-hidden py-2 bg-[#fffef4]" ref={emblaRef}>
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

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedSize] = useState<string | null>(null);

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
      className="hover:scale-104 hover:shadow-2xl flex flex-col items-center  justify-center bg-white rounded-[22px] w-[250px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)]"
    >
      <div className="relative inline-block w-full">
        <img src={image} alt={name} className="w-full block rounded-t-[22px]" />
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
          <span className="text-red-600">{discount}</span>
        </div>
      </div>

      <div
        onClick={handleInteractiveClick}
        className="flex gap-2 items-center px-2 pb-2"
      >
        <button onClick={()=> router.push("/payment-page")} className="bg-[#689567]  cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] px-9 py-2 hover:opacity-70">
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
          className="border-[1.5px]  hover:bg-white bg-white border-[#689567] cursor-pointer transition duration-300 active:scale-95 rounded-[15px] w-[37px] h-[37px] p-1.5 flex items-center justify-center"
        >
          <ShoppingCart className="text-[#689567] w-[22px] h-[22px]" />
        </Button>
      </div>
    </div>
  );
};
