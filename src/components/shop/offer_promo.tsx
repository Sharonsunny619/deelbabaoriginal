"use client"
import image from "./images/offer_banner.png";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from "react";

export default function OfferBanner() {
  const images = [image.src, image.src, image.src, image.src,image.src, image.src,image.src, image.src];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = () => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    };

    const interval = setInterval(autoplay, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden p-4 bg-[#fdfdf6] rounded-xl">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
               {images.map((src, idx) => (
            <div
              key={idx}
              className="bg-white py-0 rounded-2xl mx-4 h-18 sm:h-28 lg:h-40 shadow-md min-w-[350px] sm:min-w-[560px] lg:min-w-[790px]  flex items-center justify-center"
            >
              <img src={src} alt={`item-${idx}`} className="rounded-xl object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
