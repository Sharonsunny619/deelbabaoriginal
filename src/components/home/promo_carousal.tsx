"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { banners } from "./data";

const PromoCarousel = ({type}:{type?:string}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative flex-[0_0_100%] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
            >
              {banner.imageSrc}
              <Link href={banner.buttonLink}>
                <button className={`absolute bottom-6 cursor-pointer transition duration-300 active:scale-95 right-6 sm:bottom-10 sm:right-10 md:bottom-14 md:right-20 bg-yellow-300 text-black font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-yellow-400 shadow-md text-sm sm:text-base`}>
                  Shop Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
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
};

export default PromoCarousel;
