"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { professionals } from "./data";
import { useRouter } from "next/navigation";

export default function FindYourNeeds() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const router = useRouter();
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // set initial scroll buttons
  }, [emblaApi, onSelect]);

  const handleCardClick = (pro) => {
     router.push(`/services/${pro?.id}?from=home`);
  };

  return (
    <div className="py-8 px-2 relative">
      <h2 className="text-3xl  px-10 font-semibold mb-8 text-black flex items-center gap-4">
        Find Your <span className="text-[#689567]">Needs</span>
        <span className="flex-1 h-px bg-black"></span>
      </h2>

      <div className="  px-6" ref={emblaRef}>
        <div className="flex gap-6">
          {professionals.map((pro, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(pro)}
              className="min-w-[200px] bg-white  hover:scale-110 hover:shadow-lg rounded-3xl shadow p-6 flex flex-col items-center m-0.5"
            >
              <div className="w-32 h-32 relative overflow-hidden rounded-full mb-4">
                <Image
                  src={pro.image}
                  alt={pro.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-lg font-medium mb-4 text-black">{pro.name}</p>
              <div className="flex gap-4">
                <button className="px-6 py-1  cursor-pointer transition duration-300 active:scale-90 bg-[#689567] text-white hover:bg-black font-semibold text-[14px] rounded-md">
                  Work
                </button>
                <button className="px-6 py-1 cursor-pointer duration-300 active:scale-90  border border-[#689567] text-black rounded-md hover:bg-[#689567]  font-semibold text-[14px] hover:text-white transition">
                  Hire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Buttons */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute left-0 top-1/2 w-8 h-10 cursor-pointer transition duration-300 active:scale-95 -translate-y-1/2 bg-white/60 p-2 rounded-r-md shadow hover:bg-gray-100 z-10 flex items-center justify-center"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute right-0 top-1/2 w-8 h-10 cursor-pointer transition duration-300 active:scale-95 -translate-y-1/2 bg-white/60 p-2 rounded-l-md shadow hover:bg-gray-100 z-10 flex items-center justify-center"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
