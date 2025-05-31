"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef } from "react";
import { stores } from "./data";

const NearestStores = () => {
  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="">
      <h2 className="text-3xl  px-10 font-semibold mb-8 text-black flex items-center gap-4">
        Nearest <span className="text-[#689567]">Store</span>
        <span className="flex-1 h-px bg-black"></span>
      </h2>

      <div className="relative">
        <div className="overflow-hidden px-6" ref={emblaRef}>
          <div className="flex gap-4">
            {stores.map((store, index) => (
              <div
                key={index}
                className="min-w-[220px] rounded-2xl shadow p-4 text-center flex-shrink-0"
                style={{
                  background:
                    "radial-gradient(208.91% 208.91% at 71.52% -22.74%, #FFFFFF 0%, #DFF5A2 100%)",
                }}
              >
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-2">
                    {store.logo}
                  </div>
                </div>
                <p className="font-medium text-2xl text-black">{store.name}</p>
                <p className="text-xl font-bold mt-2 text-black">
                  {store.offer}
                </p>
                <p className="text-[12px] text-gray-500 mt-4 ">{store.valid}</p>
                <button className="mt-1 w-full bg-[#8DC38C] cursor-pointer hover:bg-black duration-300 active:scale-95 text-white py-2 rounded-[15px] transition flex items-center justify-center gap-2">
                  Visit Store
                  <ArrowRight className="h-4 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
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
      </div>
    </div>
  );
};

export default NearestStores;
