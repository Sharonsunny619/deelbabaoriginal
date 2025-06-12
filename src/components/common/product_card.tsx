import { addToCart } from "@/app/lib/cartSlice";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Product } from "./interface";
import { CategoryType } from "../shop/category/interface";

const ProductCard = ({ product, shopcategory }:{product:Product,shopcategory?:CategoryType }) => {
   const [isFavorite, setIsFavorite] = useState(false);
  const { name, image, price, originalPrice, discount, rating } = product;
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedSize] = useState<string | null>(null);

  const handleCardClick = () => {
    if (shopcategory === undefined) {
      router.push(`/shop/null/${product?.id}`);
    } else {
      router.push(`/shop/${shopcategory?.id || "null"}/${product?.id}`);
    }
  };

  const handleInteractiveClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleCardClick}
      className="hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center bg-white rounded-[22px] w-full max-w-[260px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[290px] shadow-[0px_0px_17px_4px_rgba(0,0,0,0.1)] transition-transform duration-300"
    >
      <div className="relative inline-block w-full h-[290px] overflow-hidden rounded-t-[22px]">
        <div className="relative w-full h-[280px]">
          <Image
            src={ image }
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>
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

      <div className="flex flex-col gap-0 items-start px-3 sm:px-4 pb-3 w-full">
        <span className="text-base sm:text-lg font-[510] text-black truncate mt-2">
          {name}
        </span>
        <span className="text-xs sm:text-sm text-[#919191] truncate font-[510]">
          Lorem Ipsum Dolor Sit Amet
        </span>
        <div className="flex gap-1 mt-1 text-xs sm:text-sm text-left">
          <b className="text-black font-semibold">₹{price}</b>
          <s className="text-[#616161]">₹{originalPrice}</s>
          <span className="text-red-600">{discount}% OFF</span>
        </div>
      </div>

      <div
        onClick={handleInteractiveClick}
        className="flex gap-2 items-center px-3 sm:px-4 pb-3 w-full"
      >
        <button
          onClick={() => router.push("/payment-page")}
          className="bg-[#689567] whitespace-nowrap text-xs sm:text-sm cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[13px] px-6 sm:px-8 py-1.5 hover:opacity-70 flex-1"
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
                image: image,
                quantity: 1,
                size: selectedSize,
              })
            );
          }}
          className="border-[1.5px] hover:bg-white bg-white border-[#689567] cursor-pointer transition duration-300 active:scale-95 rounded-[15px] w-8 h-8 sm:w-8 sm:h-8 p-1.5 flex items-center justify-center"
        >
          <ShoppingCart className="text-[#689567] w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
