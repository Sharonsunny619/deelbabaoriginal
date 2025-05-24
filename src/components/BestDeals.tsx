"use client";
import Image from "../../public/images/unsplash_p7_B_aebJLE.png";

const deals = [
    {
        title: "Winter Wears",
        discount: "Min. 40% Off",
        img: Image.src,
    },
    {
        title: "Mobiles",
        discount: "Min. 40% Off",
        img: Image.src,
    },
    {
        title: "Sports Shoes",
        discount: "Min. 40% Off",
        img: Image.src,
    },
    {
        title: "Health & Beauty",
        discount: "Min. 40% Off",
        img: Image.src,
    },
    {
        title: "Digital Watches",
        discount: "Min. 40% Off",
        img: Image.src,
    },
    {
        title: "Digital Watches",
        discount: "Min. 40% Off",
        img: Image.src,
    },
    {
        title: "Digital Watches",
        discount: "Min. 40% Off",
        img: Image.src,
    },
    {
        title: "Digital Watches",
        discount: "Min. 40% Off",
        img: Image.src,
    },
];

const BestDeals = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-4 text-black">
                Best <span className="text-[#689567]">Deals</span>
                <span className="flex-1 h-px bg-gray-300"></span>
            </h2>

            <div
                className="overflow-x-auto whitespace-nowrap pb-2"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                <div
                    className="flex gap-6"
                    style={{ WebkitOverflowScrolling: "touch" }}
                >
                    {deals.map((deal, index) => (
                        <div
                            key={index}
                            className="relative min-w-[200px] h-[280px] rounded-[30px] overflow-hidden shadow-md flex-shrink-0"
                        >
                            <img
                                src={deal.img}
                                alt={deal.title}
                                className="w-full h-full object-cover z-0"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-5">
                                <h3 className="text-white font-semibold text-lg text-center">
                                    {deal.title}
                                </h3>
                                <p className="text-[#00B407] font-bold text-center">
                                    {deal.discount}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default BestDeals;
