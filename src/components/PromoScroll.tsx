'use client';

import { Carousel } from 'antd';
import Image from 'next/image';
import Promo from "../../public/images/promo.jpeg";

import Link from 'next/link';
import 'antd/dist/reset.css';

const BannerCarousel = () => {
  const banners = [
    {
      id: 1,
      imageSrc: Promo.src, // Place the uploaded image in /public/
      buttonLink: '/shop',       // Link where "Shop Now" goes
    },
    {
      id: 1,
      imageSrc: Promo.src, // Place the uploaded image in /public/
      buttonLink: '/shop',       // Link where "Shop Now" goes
    },
    {
      id: 1,
      imageSrc: Promo.src, // Place the uploaded image in /public/
      buttonLink: '/shop',       // Link where "Shop Now" goes
    },
    {
      id: 1,
      imageSrc: Promo.src, // Place the uploaded image in /public/
      buttonLink: '/shop',       // Link where "Shop Now" goes
    },
  ];

  return (
    <Carousel  arrows infinite={false}>
      {banners.map((banner) => (
        <div key={banner.id} className="relative w-full h-[400px]">
          <Image
            src={banner.imageSrc}
            alt="Promotional Banner"
            fill
            className="object-cover"
            priority
          />
          <Link href={banner.buttonLink}>
            <button className="absolute bottom-15 right-[15rem] bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 shadow-md">
              Shop Now
            </button>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
