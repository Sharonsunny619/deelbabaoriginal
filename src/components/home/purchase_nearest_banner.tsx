"use client"
import Image from "next/image";
import React from "react";
import PurchaseFromNearestStore from "./images/purchase_nearest_store.png";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PurchaseNearestBanner() {
  const router = useRouter()
  return (
    <div className="relative w-full h-[480px] mb-6 bg-[#fffef4] flex justify-end items-center overflow-hidden">
      {/* Green background with text */}

      <div
        className="relative w-8/9 h-[400px] rounded-l-full flex justify-end items-center px-16 z-0 bg-gradient-to-r"
        style={{
          backgroundImage: "linear-gradient(to right, #ADC5AD, #e5ecdc)",
        }}
      >
        {/* Text content */}
        <div className="text-right text-white max-w-2xl">
          <h2 className="text-5xl font-semibold text-black mb-10">
            <span className="text-[#689567]">Purchase</span> Everything From
            Your <span className="text-[#689567]">Nearest Store</span>
          </h2>
          <p className="text-sm text-[#949393] mt-4 font-semibold">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            <br /> Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore <br />{" "}
            Magna Aliqua
          </p>
          <button onClick={()=> router.push("/shop")} className="mt-6  px-6 py-2 font-semibold cursor-pointer hover:bg-black active:scale-95 bg-[#689567] text-white rounded-2xl shadow-md duration-300">
            <div className="justify-center items-center flex gap-2">
              {" "}
              Explore <ArrowRight />
            </div>
          </button>
        </div>
      </div>

      {/* Image projecting from the top */}
      <div className="absolute left-60 -top-69 w-[40%] h-[750px] z-10">
        <Image
          src={PurchaseFromNearestStore}
          alt="Purchase"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
