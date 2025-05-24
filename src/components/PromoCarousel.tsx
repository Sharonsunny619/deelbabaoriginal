'use client';

import { Carousel } from 'antd';
import Image from 'next/image';
import Promo from '../../public/images/promo.jpeg';

import Link from 'next/link';
import 'antd/dist/reset.css';

const BannerCarousel = () => {
  const banners = [
    {
      id: 1,
      imageSrc: Promo.src,
      buttonLink: '/shop',
    },
    {
      id: 2,
      imageSrc: Promo.src,
      buttonLink: '/shop',
    },
    {
      id: 3,
      imageSrc: Promo.src,
      buttonLink: '/shop',
    },
    {
      id: 4,
      imageSrc: Promo.src,
      buttonLink: '/shop',
    },
  ];

  return (
    <Carousel arrows infinite={false}>
      {banners.map((banner) => (
        <div key={banner.id} className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={banner.imageSrc}
            alt="Promotional Banner"
            fill
            className="object-cover"
            priority
          />
          <Link href={banner.buttonLink}>
            <button className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 md:bottom-14 md:right-20 bg-yellow-300 text-black font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:bg-yellow-400 shadow-md text-sm sm:text-base">
              Shop Now
            </button>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
