"use client";

import { useParams, notFound, useRouter } from "next/navigation";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import { products } from "../data";
import { products as mainproducts } from "../../data";

import Newtab from "./images/newtag.png";
import Verified from "./images/verified.png";
import cash from "./images/2612cc91b836effa38244ffc9c28d970688b93a6.png";
import truck from "./images/truck.png";
import box from "./images/box.png";
import Reviewpic from "./images/reviewpic.jpg";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AdData, reviews, sizes } from "./data";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import ProductCarousal from "./product_carousal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import { addToCart } from "@/app/lib/cartSlice";

const BannerCard = ({ item }) => {
  return (
    <div className="relative bg-white rounded-none shadow-[0px_0px_8px_2px_rgba(0,0,0,0.1)] h-[200px] overflow-hidden">
      {/* Background Image */}
      {item.image}
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 "></div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center p-6 z-10">
        <button className="mt-4 bg-[#000] cursor-pointer transition duration-300 active:scale-95 font-semibold text-white rounded-[15px] text-[14px] px-4 py-1 hover:opacity-70 w-fit">
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

const ProductDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const productId = params.product_id;
  const productArray = params.id === "null" ? mainproducts : products;
  const product = productArray.find((p) => p.id === Number(productId));
 
  if (!product) {
    notFound();
  }

  // Move isInCart computation here, after product is defined
  const isInCart = cartItems.some((item) => item.id === product.id);

  const { name, description, price, originalPrice, discount, rating, image } = product;

  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleViewMoreReviews = () => {
    setVisibleCount(4);
  };

  const handleSeeLess = () => {
    setVisibleCount(3);
  };

  const handleInteractiveClick = (e) => {
    e.stopPropagation();
  };

  const StarRating = ({ rating }) => {
    const maxStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxStars - Math.ceil(rating);

    return (
      <div className="flex items-center gap-1">
        {[...Array(filledStars)].map((_, index) => (
          <FaStar key={`filled-${index}`} className="text-[#26A43A] text-sm" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-[#26A43A] text-sm" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar
            key={`empty-${index}`}
            className="text-[#26A43A] text-sm"
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-10 px-56 bg-[#fffff5]">
      <div className="flex gap-8 ">
        <div className="flex flex-col gap-4 w-1/2 ">
          <div className="relative w-full h-[489px] overflow-hidden rounded-[10px] bg-[#edeef1]">
            <Image
              src={image.props.src.src}
              alt={image.props.alt}
              fill
              className="object-contain rounded-[10px]"
              placeholder="blur"
              blurDataURL={image.props.src.blurDataURL}
            />
            <div className="absolute -top-1 -left-2  text-[#edeef1] text-xs font-semibold px-2 py-1 rounded">
              <Image
                src={Newtab}
                alt="adidas"
                width={100}
                height={100}
                className="object-contain"
              />
              ,
            </div>

            <div
              onClick={handleInteractiveClick}
              className="w-[40px] h-[40px] rounded-full bg-white shadow-[0px_0px_14px_5px_#0000001A] absolute top-2 right-2"
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
          </div>
          <div className="flex  gap-2 justify-center bg-[#edeef1] -mt-5 z-50 py-2 border-t-[1px] border-gray-300">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="relative w-[80px] h-[80px] rounded-[5px] overflow-hidden  cursor-pointer bg-[#edeef1] border-none hover:scale-110"
              >
                <Image
                  src={image.props.src.src}
                  alt={`${name} thumbnail ${index + 1}`}
                  fill
                  className="object-contain rounded-[5px]"
                  placeholder="blur"
                  blurDataURL={image.props.src.blurDataURL}
                />
              </div>
            ))}
          </div>
          {/* Buy Now and Add to Cart Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button onClick={()=> router.push("/payment-page")} className="group font-[700] text-[14px]  relative h-13  overflow-hidden rounded-sm bg-[#689567] text-white w-full py-4 cursor-pointer transition active:scale-95">
              BUY NOW
            </Button>
            {isInCart ? (
              <Button
                className="group font-[700] text-[14px]  relative h-13 overflow-hidden rounded-sm bg-[#505050] text-white w-full py-4 cursor-pointer transition active:scale-95"
                onClick={() => router.push("/cart")}
              >
                GO TO CART
              </Button>
            ) : (

               <Button
                className="group font-[700] text-[14px]  relative h-13 overflow-hidden rounded-sm bg-[#689567] text-white w-full py-4 cursor-pointer transition active:scale-95"
                onClick={() => {
                  if (!selectedSize) {
                    alert("Please select a size");
                    return;
                  }
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
              >
                ADD TO CART
              </Button>
            )}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="flex flex-col gap-2 w-1/2">
          {/* Product Title */}
          <div className="mb-1">
            <h1 className="text-2xl capitalize font-semibold text-[#525252]">
              {name}
            </h1>
            <p className="text-3xl font-semibold text-[#000]">ULTRABOOST 1.0</p>
            <p className="text-xl font-semibold text-[#525252]">
              Men • Sportswear
            </p>
          </div>

          {/* Price, Original Price, and Discount */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-800">₹{price}</span>
            {originalPrice && (
              <s className="text-lg text-gray-500">₹{originalPrice}</s>
            )}
            {discount && (
              <span className="text-lg text-red-500 font-semibold">
                {discount}% OFF
              </span>
            )}
          </div>
          <p className="text-sm -mt-1 text-gray-500">(Incl. of all taxes)</p>

          {/* Seller Information */}
          <div className="flex flex-col items-start gap-1 mt-2">
            <p className="text-[16px] text-[#373737] font-bold">Seller</p>
            <div className="flex items-center gap-2">
              <p className="text-[#252525] hover:underline cursor-pointer">
                ADIDAS INDIA MARKETING PRIVATE LIMITED
              </p>
              <Image
                src={Verified}
                alt="verified"
                width={20}
                height={20}
                className="rounded-[5px]"
              />
            </div>
            <span className="text-blue-600 text-[12px] cursor-pointer hover:underline">
              View vender Information
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="border flex items-center justify-center px-[6px] gap-1 shadow-md rounded-sm">
              <span className="text-lg font-semibold">{rating}</span>
              <FaStar className="text-yellow-400 text-lg" />
            </div>
            <span className="text-[16px] text-gray-500">(1,528 ratings)</span>
          </div>
          <div className="w-full h-[1px] bg-gray-200 mt-2" />
          {/* Color Selector (Mocked - Add actual colors if available in data) */}
          <div className="flex flex-col gap-2">
            <span className="text-[16px] text-[#373737] font-bold">Colour</span>
            <div className="flex gap-2">
              {["#d1a3a4", "#ffffff", "#a3a4d1"].map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selector (Mocked - Add actual sizes if available in data) */}
          <div className="flex flex-col gap-2">
            <span className="text-[16px] text-[#373737] font-bold">Size</span>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-[8px] rounded-md text-[16px] font-semibold transition duration-300 active:scale-90 cursor-pointer shadow-md
            ${
              selectedSize === size
                ? "bg-[#689567] text-white"
                : "bg-white text-[#303030] hover:bg-gray-100"
            }`}
                >
                  UK {size}
                </button>
              ))}
              <span className="text-blue-600 text-[16px] mt-2 font-semibold cursor-pointer hover:underline">
                Size chart
              </span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-200 mt-2" />
          {/* Delivery Options (Mocked) */}
          <div className="flex gap-8 text-sm text-gray-600">
            <div className="cursor-pointer hover:underline flex flex-col items-center justify-center">
              <Image
                src={cash}
                alt="cash"
                width={30}
                height={30}
                className="rounded-[5px]"
              />
              Check delivery
            </div>

            <div className="cursor-pointer hover:underline  flex flex-col items-center justify-center">
              <Image
                src={truck}
                alt="truck"
                width={30}
                height={30}
                className="rounded-[5px]"
              />
              Free delivery
            </div>

            <span className="cursor-pointer hover:underline  flex flex-col items-center justify-center">
              <Image
                src={box}
                alt="box"
                width={30}
                height={30}
                className="rounded-[5px]"
              />
              Initiating on delivery
            </span>
          </div>
          <div className="w-full h-[1px] bg-gray-200 mt-2" />
          {/* Description */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[18px] font-bold text-[#373737]">
              Description
            </h2>
            <p className="text-sm text-[#919191] font-bold">{description}</p>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[18px] font-bold text-[#373737]">
              Product Details
            </h2>
            <div className="grid grid-cols-1 gap-2 text-sm text-[#373737]">
              <div>
                <span className="font-semibold">Closure type:</span> Lace-Up
              </div>
              <div>
                <span className="font-semibold">Heel type:</span> Flat
              </div>
              <div>
                <span className="font-semibold">Water resistance level:</span>{" "}
                Water Resistant
              </div>
              <div>
                <span className="font-semibold">Sole material:</span> Rubber
              </div>
              <div>
                <span className="font-semibold">Style:</span> Sneaker
              </div>
              <div>
                <span className="font-semibold">Country of Origin:</span> India
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-200 mt-2" />
          {/* Ratings & Reviews */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[18px] font-bold text-gray-800 flex gap-2">
              Ratings & Reviews{" "}
              <p className="text-[#525252]">(1,528 ratings and 91 reviews)</p>
            </h2>
            <div className="flex  items-start justify-between ">
              <div className="flex flex-col ">
                <span className="text-[50px]  text-[#689567] font-semibold -mb-2">
                  {rating}
                </span>
                <p className="text-[16px] text-black font-bold">Very Good</p>
              </div>
              <button className="w-fit bg-[#28a745] text-white text-sm font-semibold rounded-[5px] px-4 py-2 hover:bg-[#218838] transition duration-300">
                Rate Product
              </button>
            </div>
            {/* Review Button */}
            {/* Reviews (Mocked - Add actual reviews if available) */}
            <div className="flex flex-col gap-4 mt-4">
              {reviews.slice(0, visibleCount).map((review, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <p className="text-xs text-black font-bold">{review.name}</p>
                  <div className="flex items-start justify-start gap-2">
                    <Image
                      src={Reviewpic}
                      alt="Reviewpic"
                      width={35}
                      height={35}
                      className="rounded-[5px]"
                    />
                    <Image
                      src={Reviewpic}
                      alt="Reviewpic"
                      width={35}
                      height={35}
                      className="rounded-[5px]"
                    />
                    <Image
                      src={Reviewpic}
                      alt="Reviewpic"
                      width={35}
                      height={35}
                      className="rounded-[5px]"
                    />
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="text-[14px] text-[#919191] font-bold">
                    {review.comment}
                  </p>
                </div>
              ))}
              {visibleCount < reviews.length ? (
                <span
                  onClick={handleViewMoreReviews}
                  className="text-blue-600 text-sm cursor-pointer hover:underline font-bold"
                >
                  See More
                </span>
              ) : (
                <span
                  onClick={handleSeeLess}
                  className="text-blue-600 text-sm cursor-pointer hover:underline font-bold"
                >
                  See Less
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div key={`banner-${AdData[0].id}`} className="mt-5 shadow-lg col-span-5">
        <div className="bg-white p-4 rounded-[22px]  ">
          <h2 className="text-2xl font-semibold mb-4 text-start">
            You Might Be Interested In
          </h2>
          <BannerSection items={AdData} />
        </div>
      </div>
      <ProductCarousal />
    </section>
  );
};

export default ProductDetailPage;