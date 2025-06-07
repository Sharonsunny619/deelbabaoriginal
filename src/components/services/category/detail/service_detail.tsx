import React, { useState, useCallback } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import workImage from "./images/0f84fb4c23496ea53815e3f5c91d6eccd6b61d45.jpg";
import {
  Calendar,
  ThumbsDown,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { format, addDays } from "date-fns";
import useEmblaCarousel from "embla-carousel-react";

export default function ServiceDetail({ service }: { service: any }) {
  const dates = Array.from({ length: 15 }, (_, i) => addDays(new Date(), i));
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [selectedIdx, setSelectedIdx] = useState(2);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const timeSlots = [
    "9am - 11am",
    "11am - 1pm",
    "1pm - 3pm",
    "3pm - 5pm",
    "5pm - 7pm",
    "7pm - 9pm",
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col md:flex-row gap-10 px-64 py-10">
      {/* Left Column */}
      <div className="w-full md:w-1/2">
        {/* Profile */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border">
            <Image
              src={service.image}
              alt={service.name}
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold mt-4">{service.name}</h2>
          <p className="text-sm text-[#212121] font-[600]">Nurse</p>
          <div className="flex items-center gap-1 text-yellow-500 mt-2">
            {[...Array(Math.round(service.rating))].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">{service.location}</p>
          <p className="text-sm text-gray-600">{service.kmAway} Km Away</p>
          <p className="text-sm text-gray-600">
            {service.worksCompleted} Work Completed
          </p>
        </div>

        {/* Work Photos */}
        <div className="mt-10 px-4">
          <h3 className="font-semibold text-md mb-2">Work Photos</h3>
          <div className="flex gap-2 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((id) => (
              <div
                key={id}
                className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
              >
                <Image
                  src={workImage}
                  alt={`Work ${id}`}
                  width={96}
                  height={96}
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-10 px-4">
          <h3 className="font-semibold text-lg mb-2">
            Rating & Review
            <span className="text-[#525252] text-sm">
              {" "}
              (29 Ratings And 12 Reviews)
            </span>
          </h3>
          {[1, 2, 3].map((id) => (
            <div key={id} className="mb-4">
              <p className="font-semibold">User {id}</p>
              <div className="flex gap-1 text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-3 items-end justify-end">
                <div className="cursor-pointer active:scale-110">
                  <ThumbsUp className="h-3 w-3" strokeWidth={1} />
                </div>
                <div className="cursor-pointer active:scale-110">
                  <ThumbsDown className="h-3 w-3" strokeWidth={1} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 space-y-10 border-l-[1px] px-10">
        {/* Schedule Availability */}
        <div className="rounded-xl shadow px-6 py-4 bg-white ">
          <div className="flex items-center justify-between">
            <h3 className="text-md font-semibold mb-4">
              Schedule Availability
            </h3>
            <Calendar className="h-5 w-5" strokeWidth={1.4} />
          </div>
          <div className="relative mt-2 flex items-center justify-center">
            {/* Embla Viewport */}
            <div ref={emblaRef} className="embla overflow-hidden w-[500px]">
              <div className="embla__container flex gap-3 px-8">
                {dates.map((date, idx) => (
                  <div key={idx} className="flex-[0_0_auto]">
                    <div
                      onClick={() => setSelectedIdx(idx)}
                      className={`w-[60px] py-2 text-center rounded-lg cursor-pointer text-sm transition ${
                        idx === selectedIdx
                          ? "bg-[#689567] text-white font-medium"
                          : "bg-[#689567] text-white opacity-50"
                      }`}
                    >
                      <div className="leading-tight font-bold">
                        {format(date, "MMM")}
                      </div>
                      <div className="text-lg">{format(date, "d")}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#E7F3E6] hover:bg-[#689567] hover:text-[#e7f3e6] cursor-pointer active:scale-90 text-[#689567] p-2 flex items-center justify-center rounded-md w-[25px] h-[25px] shadow-md hover:opacity-90 z-10"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#E7F3E6] hover:bg-[#689567] hover:text-[#e7f3e6] cursor-pointer active:scale-90 text-[#689567] p-2 flex items-center justify-center rounded-md w-[25px] h-[25px] shadow-md hover:opacity-90 z-10"
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

         <div className="flex flex-col  mx-20">
              <div className="grid grid-cols-3 gap-2 text-sm text-center mt-4 ">
                {timeSlots.map((slot, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedTime(slot)}
                    className={`border rounded-full px-2 py-1 cursor-pointer transition ${
                      selectedTime === slot
                        ? "bg-[#689567] text-white border-[#689567]"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {slot}
                  </div>
                ))}
              </div>
    
              <button className="w-full transittion duration-300 active:scale-95 cursor-pointer mt-4 py-2   bg-[#689567] text-white rounded-md text-sm font-semibold hover:opacity-90">
                Continue
              </button>
         </div>
        </div>

        {/* Terms & Conditions */}
        <div className="text-sm text-gray-700 px-4">
          <h3 className="font-semibold mb-2">Term & Conditions</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</li>
            <li>
              Bad Do Elusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
            </li>
            <li>Lorem Ipsum Dolor Sit Amet, Consectetur.</li>
            <li>Magna Aliquat Labore Et Dolore Magna Aliqua.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
