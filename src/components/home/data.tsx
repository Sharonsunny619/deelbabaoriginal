
import Image from "next/image";
import Reebok from "./images/reebok.png";
import Puma from "./images/puma.png";
import Adidas from "./images/adidas.png";
import BestDeal1 from "./images/bestdeal1.jpg"
import BestDeal2 from "./images/bestdeal2.jpg"
import BestDeal3 from "./images/bestdeal3.jpg"
import Promo from "./images/promo.jpeg"
import Driver from "./images/driver.png"
import Plumber from "./images/plumber.png";
import Nurse from "./images/nurse.jpg";
import Product from "./images/product.png";




export const serviceProviders = [
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


export const stores = [
  {
    name: "Adidas",
    logo: <Image src={Adidas} alt="adidas" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Kappa",
    logo: <Image src={Puma} alt="kappa" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Puma",
    logo: <Image src={Reebok} alt="puma" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "The North Face",
    logo: <Image src={Adidas} alt="northface" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Reebok",
    logo: <Image src={Puma} alt="reebok" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Reebok",
    logo: <Image src={Reebok} alt="reebok" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
    {
    name: "Puma",
    logo: <Image src={Reebok} alt="puma" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "The North Face",
    logo: <Image src={Adidas} alt="northface" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Reebok",
    logo: <Image src={Puma} alt="reebok" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
    {
    name: "Puma",
    logo: <Image src={Reebok} alt="puma" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "The North Face",
    logo: <Image src={Adidas} alt="northface" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Reebok",
    logo: <Image src={Puma} alt="reebok" width={60} height={60} className="object-contain" />,
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
];


export const deals = [
    {
        title: "Winter Wears",
        discount: "Min. 40% Off",
        img:  <Image
          src={BestDeal1}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
    {
        title: "Mobiles",
        discount: "Min. 40% Off",
      img:  <Image
          src={BestDeal2}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
    {
        title: "Sports Shoes",
        discount: "Min. 40% Off",
        img:  <Image
          src={BestDeal3}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
    {
        title: "Health & Beauty",
        discount: "Min. 40% Off",
        img:  <Image
          src={BestDeal1}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
    {
        title: "Digital Watches",
        discount: "Min. 40% Off",
        img:  <Image
          src={BestDeal2}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
    {
        title: "Digital Watches",
        discount: "Min. 40% Off",
       img:  <Image
          src={BestDeal3}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
    {
        title: "Digital Watches",
        discount: "Min. 40% Off",
         img:  <Image
          src={BestDeal1}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
    {
        title: "Digital Watches",
        discount: "Min. 40% Off",
        img:  <Image
          src={BestDeal2}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
      {
        title: "Digital Watches",
        discount: "Min. 40% Off",
       img:  <Image
          src={BestDeal3}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
    {
        title: "Digital Watches",
        discount: "Min. 40% Off",
         img:  <Image
          src={BestDeal1}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
    {
        title: "Digital Watches",
        discount: "Min. 40% Off",
        img:  <Image
          src={BestDeal2}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
    },
];

 export  const banners = [
    {
      id: 1,
      imageSrc:<Image
          src={Promo}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
      buttonLink: '/shop',
    },
    {
      id: 2,
      imageSrc: <Image
          src={Promo}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
      buttonLink: '/shop',
    },
    {
      id: 3,
      imageSrc: <Image
          src={Promo}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
      buttonLink: '/shop',
    },
    {
      id: 4,
      imageSrc: <Image
          src={Promo}
          alt="Purchase"
          fill
          className="object-fit"
          priority
        />,
      buttonLink: '/shop',
    },
  ];

 

 export  const professionals = [
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



  export  const products = [
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