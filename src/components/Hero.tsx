"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import bench from "../images/bench.png";

export default function Hero() {
    return (
        <>
            <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
                {/* Background Image */}
                <Image
                    src={bench}
                    alt="Background"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="z-11"
                />

                {/* White semi-transparent overlay */}
                <div className="absolute inset-0 bg-white bg-opacity-30 z-10" />

                {/* Gradient overlay on top of white overlay */}
                <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(90.66deg, #000000 0.55%, rgba(44, 44, 44, 0.4) 28.21%, rgba(175, 175, 175, 0.15) 75.62%, rgba(3, 3, 3, 0) 86.89%)",
                    }}
                />

                {/* Search bar - absolutely positioned at the top center */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-30">
                    <div className="flex items-center border border-white rounded-full overflow-hidden shadow-md w-full">
                        <input
                            type="text"
                            placeholder="Search Product and Services"
                            className="flex-grow px-4 py-3 text-sm focus:outline-none rounded-l-full"
                        />
                        <button className="border-l border-white text-black px-5 py-3 flex items-center justify-center rounded-r-full">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* Content below search bar */}

                <div className="relative z-30 text-left max-w-3xl w-full pt-24 px-4 mx-auto md:mx-0 ">
                    <h2 className="text-white font-medium text-sm tracking-wider mb-2 uppercase">
                        Opportunities Waiting For You
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        One Solution For
                        <br />
                        All Your Needs
                    </h1>
                    <p className="text-white  mb-6">
                        You can get services, products and everything from a
                        single window
                    </p>

                    <button className="hover:bg-opacity-100 bg-opacity-60 bg-[#689567] text-white px-48 py-3 rounded-full font-medium transition duration-200">
                        Explore 
                    </button>
                </div>
            </section>
            

        </>
    );
}
