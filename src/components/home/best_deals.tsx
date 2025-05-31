"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { deals } from "./data";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const BestDeals = () => {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className=" py-6">
      <h2 className="text-3xl px-10 font-semibold mb-6 flex items-center gap-4 text-black">
        <span className="flex-1 h-px bg-gray-300"></span>
        Best <span className="text-[#689567]">Deals</span>
      </h2>

      <div className="relative ">
        <div className="overflow-hidden px-6" ref={emblaRef}>
          <div className="flex">
            {deals.map((deal, index) => (
              <div
                key={index}
                className="relative min-w-[200px] h-[280px] rounded-[30px] overflow-hidden shadow-md flex-shrink-0 mx-2"
              >
                {deal.img}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-5">
                  <h3 className="text-white font-semibold text-lg text-center">
                    {deal.title}
                  </h3>
                  <p className="text-[#00B407] font-bold text-center">{deal.discount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
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
    </div>
  );
};

export default BestDeals;
