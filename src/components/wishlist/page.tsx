"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Heart from "./images/84a582986197ac2525b5af472dc41e11c69c3437.png";
import Shirt from "./images/poloshirt.png";
import Bag from "./images/bag.png";
import Glass from "./images/glass.png";
import Pant from "./images/pant.png";
import Shoe from "./images/sneakers.png";
import Top from "./images/top.png";
import Lipstick from "./images/lipstick.png";

export default function Wishlist() {
  const router = useRouter();
  return (
    <div className=" pt-20 flex flex-col items-center justify-start">
      <div className="relative w-[300px] h-[300px] mx-auto">
        {/* Heart in center */}
        <Image
          src={Heart}
          alt="Heart"
          width={100}
          height={100}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />

        {/* Items around the heart */}
        <Image
          src={Shirt}
          alt="shirt"
          width={40}
          height={40}
          className="absolute top-4 left-1/2 -translate-x-1/2"
        />
        <Image
          src={Bag}
          alt="Bag"
          width={40}
          height={40}
          className="absolute top-12 right-6"
        />
        <Image
          src={Top}
          alt="Top"
          width={40}
          height={40}
          className="absolute top-12 left-6"
        />
        <Image
          src={Glass}
          alt="Glass"
          width={40}
          height={40}
          className="absolute top-30 -right-3"
        />
        <Image
          src={Pant}
          alt="Pant"
          width={40}
          height={40}
          className="absolute top-48 -left-5 -translate-x-1/2"
        />
        <Image
          src={Shoe}
          alt="Shoe"
          width={40}
          height={40}
          className="absolute   top-30 -left-4 "
        />
        <Image
          src={Lipstick}
          alt="Lipstick"
          width={40}
          height={40}
          className="absolute top-48 -right-10"
        />
      </div>

      <p className="text-[36px] font-bold mt-15">
        {" "}
        Your Deelbaba Cart is Empty!
      </p>
      <p className="font-[510] text-[18px] text-[#212121]">
        Add Something To Your Bag And Enjoy Your Shoping
      </p>

      <Button
        onClick={() => router.push("/shop")}
        className="group mt-10 relative h-10 overflow-hidden rounded-full bg-[#689567] text-white px-8 py-2 cursor-pointer transition active:scale-95"
      >
        <span className="relative z-10 font-bold"> Back to Shopping </span>
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full  bg-black transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
        </span>
      </Button>
    </div>
  );
}
