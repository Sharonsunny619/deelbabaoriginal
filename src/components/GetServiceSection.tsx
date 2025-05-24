import { useEffect, useState } from "react";

const serviceProviders = [
  {
    name: "Thomas Michel",
    role: "Hair Stylist",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Kripa",
    role: "Therapist",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Anjali",
    role: "Yoga Trainer",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Rohit",
    role: "Nutritionist",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Sanya",
    role: "Fitness Coach",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const CarouselSection = () => {
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
    const left = (currentIndex - 1 + serviceProviders.length) % serviceProviders.length;
    const right = (currentIndex + 1) % serviceProviders.length;

    if (i === currentIndex) {
      return "scale-110 z-20 opacity-100";
    }

    if (windowWidth && windowWidth >= 1024) {
      if (i === left || i === right) {
        return "scale-95 z-10 opacity-60";
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
      i === (currentIndex - 1 + serviceProviders.length) % serviceProviders.length ||
      i === (currentIndex + 1) % serviceProviders.length
    );
  };

  return (
    <section className="py-24 sm:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
            <span className="text-[#689567]">Get</span> A Service Or <br />
            <span className="text-[#689567]">Offer</span> A Service
          </h2>
          <p className="mt-4 text-[#919191] sm:w-4/5 lg:w-[64%] text-sm sm:text-base leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>
        </div>

        {/* RIGHT SIDE: CAROUSEL */}
        <div className="w-full lg:w-1/2 flex justify-center items-center space-x-0 lg:space-x-6 transition-all duration-1000 ease-in-out overflow-hidden">
          {serviceProviders.map((person, i) => {
            if (!isVisible(i)) return null;

            return (
              <div
                key={i}
                className={`w-56 sm:w-64 transition-all duration-1000 ease-in-out transform bg-white border border-gray-200 rounded-2xl p-6 text-center shadow ${getSlideStyle(i)}`}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover shadow mb-3 sm:mb-4"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">{person.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{person.role}</p>
                <div className="flex justify-center mt-1 sm:mt-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span
                      key={j}
                      className={`${
                        j < person.rating ? "text-yellow-400" : "text-gray-300"
                      } text-sm sm:text-lg`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <button className="mt-3 sm:mt-4 bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-green-700 transition text-xs sm:text-sm">
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

export default CarouselSection;
