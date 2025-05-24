"use client";

import Image from "next/image";
import Driver from "../images/driver.png";
import Nurse from "../images/nurse.jpg";
import Plumber from "../images/plumber.png";

const professionals = [
    { name: "Nurse", image: Nurse.src },
    { name: "Driver", image: Driver.src },
    { name: "Plumber", image: Plumber.src },
    { name: "Nurse", image: Nurse.src },
    { name: "Driver", image: Driver.src },
    { name: "Plumber", image: Plumber.src },
    { name: "Nurse", image: Nurse.src },
    { name: "Driver", image: Driver.src },
    { name: "Plumber", image: Plumber.src },
    { name: "Nurse", image: Nurse.src },
    { name: "Driver", image: Driver.src },
    { name: "Plumber", image: Plumber.src },
];

const CategoryScroll = () => {
    return (
        <div className="py-8 px-2">
            <h2 className="text-lg font-extrabold mb-6 flex items-center gap-1 text-black">
                Find Your <span className="text-[#689567]">Needs</span>
                <span className="flex-1 h-px bg-black"></span>
            </h2>
            <div className="overflow-x-auto scrollbar-hide" style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}>
                <div className="flex gap-6">
                    {professionals.map((pro, idx) => (
                        <div
                            key={idx}
                            className="min-w-[200px] bg-white rounded-3xl shadow p-6 flex flex-col items-center  m-0.5 "
                        >
                            <div className="w-32 h-32 relative overflow-hidden rounded-full mb-4">
                                <Image
                                    src={pro.image}
                                    alt={pro.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className="text-lg font-medium mb-4 text-black">
                                {pro.name}
                            </p>
                            <div className="flex gap-4">
                                <button className="px-6 py-1 bg-[#689567] text-white rounded-md">
                                    Work
                                </button>
                                <button className="px-6 py-1 border border-[#689567] text-black rounded-md hover:bg-[#689567] hover:text-white transition">
                                    Hire
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryScroll;
