"use client";

import { useParams, notFound } from "next/navigation";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { products } from "../data";
import Newtab from "./images/newtag.png";
import Verified from "./images/verified.png";

import { Button } from "@/components/ui/button";

const ProductDetailPage = () => {
  const params = useParams();
  console.log("params", params);

  const productId = params.product_id;

  const product = products.find((p) => p.id === Number(productId));
  console.log("product", product);

  if (!product) {
    notFound();
  }

  const { name, description, price, originalPrice, discount, rating, image } =
    product;

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

            <div className="absolute top-2 right-2">
              <IoHeartOutline className="text-2xl text-gray-600 cursor-pointer hover:text-red-500" />
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
            <Button className="group font-[700] text-[14px]  relative h-13  overflow-hidden rounded-sm bg-[#689567] text-white w-full py-4 cursor-pointer transition active:scale-95">
              BUY NOW
            </Button>
            <Button className="group font-[700] text-[14px]  relative h-13  overflow-hidden rounded-sm bg-[#689567] text-white w-full py-4 cursor-pointer transition active:scale-95">
              ADD TO CART
            </Button>
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
            <p className="text-sm text-gray-600 font-semibold">Seller</p>
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
            <span className="text-sm text-gray-500">(1,528 ratings)</span>
          </div>

          {/* Color Selector (Mocked - Add actual colors if available in data) */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-700">Colour</span>
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
            <span className="text-sm font-semibold text-gray-700">Size</span>
            <div className="flex gap-2 flex-wrap">
              {["4", "4.5", "5", "5.5", "6", "7", "8", "9", "10"].map(
                (size, index) => (
                  <button
                    key={index}
                    className="px-4 py-1 border border-gray-300 rounded-[5px] text-sm hover:bg-gray-100 transition duration-300"
                  >
                    UK {size}
                  </button>
                )
              )}
              <span className="text-blue-600 text-sm cursor-pointer hover:underline">
                Size chart
              </span>
            </div>
          </div>

          {/* Delivery Options (Mocked) */}
          <div className="flex gap-2 text-sm text-gray-600">
            <span className="cursor-pointer hover:underline">
              Check delivery
            </span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">
              Free delivery
            </span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">
              Initiating on delivery
            </span>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-800">Description</h2>
            <p className="text-sm text-gray-600">{description}</p>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Product Details
            </h2>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
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

          {/* Ratings & Reviews */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Ratings & Reviews (1,528 ratings and 91 reviews)
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">{rating}</span>
              <FaStar className="text-yellow-400 text-xl" />
              <span className="text-sm text-gray-500">Very Good</span>
            </div>
            {/* Review Button */}
            <button className="w-fit bg-[#28a745] text-white text-sm font-semibold rounded-[5px] px-4 py-2 hover:bg-[#218838] transition duration-300">
              Rate Product
            </button>
            {/* Reviews (Mocked - Add actual reviews if available) */}
            <div className="flex flex-col gap-4 mt-4">
              {[
                { name: "Andrea Luiz", rating: 5, comment: description },
                { name: "Andrea Luiz", rating: 5, comment: description },
                { name: "Andrea Luiz", rating: 5, comment: description },
              ].map((review, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">
                      {review.rating}
                    </span>
                    <FaStar className="text-yellow-400 text-sm" />
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                  <p className="text-xs text-gray-500">By {review.name}</p>
                </div>
              ))}
              <span className="text-blue-600 text-sm cursor-pointer hover:underline">
                View all reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
