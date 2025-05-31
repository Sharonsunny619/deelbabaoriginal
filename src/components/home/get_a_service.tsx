"use client"
import { useEffect, useState } from "react";
import { serviceProviders } from "./data";



const GetServiceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % serviceProviders.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const getSlideStyle = (i: number) => {
    const left =
      (currentIndex - 1 + serviceProviders.length) % serviceProviders.length;
    const right = (currentIndex + 1) % serviceProviders.length;

    if (i === currentIndex) {
      return "scale-115 z-20 opacity-100"; // Reduced scale slightly to avoid clipping
    }

    if (windowWidth && windowWidth >= 1024) {
      if (i === left || i === right) {
        return "scale-90 z-10 opacity-60"; // Reduced scale slightly for better spacing
      }
    }

    return "hidden lg:block opacity-0";
  };

  const isVisible = (i: number) => {
    if (windowWidth !== null && windowWidth < 1024) {
      return i === currentIndex;
    }
    return (
      i === currentIndex ||
      i ===
        (currentIndex - 1 + serviceProviders.length) %
          serviceProviders.length ||
      i === (currentIndex + 1) % serviceProviders.length
    );
  };

  return (
    <section className="py-6  sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight  [text-shadow:1px_2px_6px_rgba(0,0,0,0.3)]">
            <span className="text-[#689567] [text-shadow:1px_2px_6px_rgba(0,0,0,0.3)]">
              Get
            </span>{" "}
            A Service Or <br />
            <span className="text-[#689567] [text-shadow:1px_2px_6px_rgba(0,0,0,0.3)]">
              Offer
            </span>{" "}
            A Service
          </h2>
          <p className="mt-4 font-[590] ml-1 text-[#919191] sm:w-4/5 lg:w-[64%] text-sm sm:text-base leading-relaxed">
            {"Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua."
              .split("")
              .map((char, index) => (
                <span
                  key={index}
                  className="[text-shadow:1px_1px_4px_rgba(0,0,0,0.3)] inline-block"
                >
                  {char}
                </span>
              ))}
          </p>
        </div>

        {/* RIGHT SIDE: CAROUSEL */}
        <div className="w-full lg:w-1/2 h-[320px]  flex justify-center items-center space-x-0 lg:space-x-4 transition-all duration-1000 ease-in-out">
          {serviceProviders.map((person, i) => {
            if (!isVisible(i)) return null;

            return (
              <div
                key={i}
                className={`w-56 sm:w-64 transition-all duration-1000 ease-in-out transform bg-[#fff] rounded-4xl p-6 text-center shadow-[inset_0px_0px_0px_rgba(0,0,0,0.2),0px_3px_5px_rgba(0,0,0,0.15)] ${getSlideStyle(
                  i
                )}`}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl object-cover shadow-lg mb-3 sm:mb-4"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {person.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {person.role}
                </p>
                <div className="flex flex-col justify-center items-center ">
                  <div className="flex items-center gap-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span
                        key={j}
                        className={`${
                          j < person.rating ? "text-[#26AE62]" : "text-gray-300"
                        } text-sm sm:text-lg`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-[12px] font-[590] text-[#626262]">
                    120 Reviews
                  </p>
                </div>
                <button className="mt-3 cursor-pointer hover:bg-black duration-300 active:scale-95 sm:mt-4 bg-[#388e3c] text-white px-3 sm:px-4 py-1.5 sm:py-[9px] rounded-xl  transition text-xs sm:text-[12px] font-semibold">
                  See More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetServiceSection;
