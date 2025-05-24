import { useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import Product from "../images/product.png";

const FeaturedProducts = () => {
    const products = [
        {
            name: "Maybelline",
            image: Product.src,
            brand: "Maybelline",
            price: 1199,
            originalPrice: 1499,
            discount: "20% Off",
            rating: 4.5,
        },
        {
            name: "Fossil",
            image: Product.src,
            brand: "Fossil",
            price: 1199,
            originalPrice: 1499,
            discount: "20% Off",
            rating: 4.5,
        },
        {
            name: "Rayban",
            image: Product.src,
            brand: "Rayban",
            price: 1199,
            originalPrice: 1499,
            discount: "20% Off",
            rating: 4.5,
        },
        {
            name: "Allensolly",
            image: Product.src,
            brand: "Allensolly",
            price: 1199,
            originalPrice: 1499,
            discount: "20% Off",
            rating: 4.5,
        },
        {
            name: "Allensolly",
            image: Product.src,
            brand: "Allensolly",
            price: 1199,
            originalPrice: 1499,
            discount: "20% Off",
            rating: 4.5,
        },
        {
            name: "Allensolly",
            image: Product.src,
            brand: "Allensolly",
            price: 1199,
            originalPrice: 1499,
            discount: "20% Off",
            rating: 4.5,
        },
        {
            name: "Allensolly",
            image: Product.src,
            brand: "Allensolly",
            price: 1199,
            originalPrice: 1499,
            discount: "20% Off",
            rating: 4.5,
        },
        {
            name: "Allensolly",
            image: Product.src,
            brand: "Allensolly",
            price: 1199,
            originalPrice: 1499,
            discount: "20% Off",
            rating: 4.5,
        },
    ];

    return (
        <section className="py-10 px-4 ">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Featured <span className="text-[#689567]">Products</span>
            </h2>

            <div
                className="overflow-x-auto whitespace-nowrap pb-2 flex"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
};

const ProductCard = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { name, image, brand, price, originalPrice, discount, rating } =
        product;

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-[22px] w-[250px] m-2 shadow-[0px_0px_14px_5px_rgba(0,0,0,0.1)]">
            {/* Image Section */}
            <div className="relative inline-block w-full">
                <img
                    src={image}
                    alt={name}
                    className="w-full block rounded-t-[22px]"
                />
                <span className="absolute top-[12px] left-[20px] flex justify-between items-center w-[80%]">
                    {/* Rating */}
                    <div className="bg-white flex items-center rounded px-2 py-[2px] shadow">
                        <span className="font-bold m-0">{rating}</span>
                        <span className="ml-3 ">
                            <FaStar className="text-yellow-500 text-xs text-center" />
                        </span>
                    </div>
                    {/* Favorite Icon */}
                    <div className="w-[40px] h-[40px] rounded-full bg-white shadow-[0px_0px_14px_5px_#0000001A] relative">
                        {isFavorite ? (
                            <IoIosHeart
                                className="absolute left-[10px] top-[11px] text-[#3c693b] w-5 h-5 cursor-pointer"
                                onClick={() => setIsFavorite(false)}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                className="absolute left-[10px] top-[11px] text-[#3c693b] w-5 h-5 cursor-pointer"
                                onClick={() => setIsFavorite(true)}
                            />
                        )}
                    </div>
                </span>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-[2px] text-left">
                <span className="text-lg font-medium text-gray-500 mb-0">
                    {name}
                </span>
                <span className="text-sm text-gray-500">
                    Lorem Ipsum Dolor Sit Amet
                </span>
                <div className="flex gap-0.5  mt-1 text-sm text-left">
                    <b className="text-black font-semibold">₹{price}</b>
                    <s className="text-[#616161]">₹{originalPrice}</s>
                    <span className="text-red-600">{discount}</span>
                </div>
            </div>

            {/* Button Section */}
            <div className="flex gap-2 items-center px-2 pb-2">
                <button className="bg-[#689567] text-white rounded-[15px] px-9 py-2 hover:opacity-70">
                    Buy Now
                </button>
                <div className="border-[1.5px] border-[#689567] rounded-[15px] w-[37px] h-[37px] p-1.5 flex items-center justify-center">
                    <FaShoppingCart className="text-[#689567] w-[22px] h-[22px]" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
