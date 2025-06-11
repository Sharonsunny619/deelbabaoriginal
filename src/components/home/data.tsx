import Image from "next/image";
import Reebok from "./images/reebok.png";
import Puma from "./images/puma.png";
import Adidas from "./images/adidas.png";
import BestDeal1 from "./images/bestdeal1.jpg";
import BestDeal2 from "./images/bestdeal2.jpg";
import BestDeal3 from "./images/bestdeal3.jpg";
import Promo from "./images/promo.jpeg";
import Driver from "./images/driver.png";
import Plumber from "./images/plumber.png";
import Nurse from "./images/nurse.jpg";
import Product from "./images/product.png";
import Product2 from "../shop/images/productglass.jpg";

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
    logo: (
      <Image
        src={Adidas}
        alt="adidas"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Kappa",
    logo: (
      <Image
        src={Puma}
        alt="kappa"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Puma",
    logo: (
      <Image
        src={Reebok}
        alt="puma"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "The North Face",
    logo: (
      <Image
        src={Adidas}
        alt="northface"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Reebok",
    logo: (
      <Image
        src={Puma}
        alt="reebok"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Reebok",
    logo: (
      <Image
        src={Reebok}
        alt="reebok"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Puma",
    logo: (
      <Image
        src={Reebok}
        alt="puma"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "The North Face",
    logo: (
      <Image
        src={Adidas}
        alt="northface"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Reebok",
    logo: (
      <Image
        src={Puma}
        alt="reebok"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Puma",
    logo: (
      <Image
        src={Reebok}
        alt="puma"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "The North Face",
    logo: (
      <Image
        src={Adidas}
        alt="northface"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
  {
    name: "Reebok",
    logo: (
      <Image
        src={Puma}
        alt="reebok"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    offer: "Flat 50% Off",
    valid: "Offer Valid Till March*",
  },
];

export const deals = [
  {
    title: "Winter Wears",
    discount: "Min. 40% Off",
    img:BestDeal1.src
  },
  {
    title: "Mobiles",
    discount: "Min. 40% Off",
    img:BestDeal2.src
  },
  {
    title: "Sports Shoes",
    discount: "Min. 40% Off",
    img:BestDeal3.src
  },
  {
    title: "Health & Beauty",
    discount: "Min. 40% Off",
     img:BestDeal1.src
  },
  {
    title: "Digital Watches",
    discount: "Min. 40% Off",
    img:BestDeal2.src
  },
  {
    title: "Digital Watches",
    discount: "Min. 40% Off",
    img:BestDeal3.src
  },
  {
    title: "Digital Watches",
    discount: "Min. 40% Off",
     img:BestDeal1.src
  },
  {
    title: "Digital Watches",
    discount: "Min. 40% Off",
    img:BestDeal2.src
  },
  {
    title: "Digital Watches",
    discount: "Min. 40% Off",
    img:BestDeal3.src
  },
  {
    title: "Digital Watches",
    discount: "Min. 40% Off",
     img:BestDeal1.src
  },
  {
    title: "Digital Watches",
    discount: "Min. 40% Off",
    img:BestDeal2.src
  },
];

export const banners = [
  {
    id: 1,
    imageSrc: (
      <Image src={Promo} alt="Purchase" fill className="object-fit" priority />
    ),
    buttonLink: "/shop",
  },
  {
    id: 2,
    imageSrc: (
      <Image src={Promo} alt="Purchase" fill className="object-fit" priority />
    ),
    buttonLink: "/shop",
  },
  {
    id: 3,
    imageSrc: (
      <Image src={Promo} alt="Purchase" fill className="object-fit" priority />
    ),
    buttonLink: "/shop",
  },
  {
    id: 4,
    imageSrc: (
      <Image src={Promo} alt="Purchase" fill className="object-fit" priority />
    ),
    buttonLink: "/shop",
  },
];

export const professionals = [
  { id: 1, name: "Nurse", image: Nurse.src },
  { id: 2, name: "Driver", image: Driver.src },
  { id: 3, name: "Plumber", image: Plumber.src },
  { id: 4, name: "Electrician", image: Nurse.src },
  { id: 5, name: "Carpenter", image: Plumber.src },
  { id: 6, name: "Cook", image: Driver.src },
  { id: 7, name: "Babysitter", image: Plumber.src },
  { id: 8, name: "Cleaner", image: Driver.src },
  { id: 9, name: "Mechanic", image: Driver.src },
  { id: 10, name: "Maid", image: Plumber.src },
  { id: 11, name: "Security Guard", image: Driver.src },
  { id: 12, name: "Painter", image: Driver.src },
  { id: 13, name: "Nurse", image: Nurse.src },
  { id: 13, name: "Driver", image: Driver.src },
  { id: 14, name: "Plumber", image: Plumber.src },
  { id: 15, name: "Electrician", image: Nurse.src },
  { id: 16, name: "Carpenter", image: Plumber.src },
  { id: 17, name: "Cook", image: Driver.src },
  { id: 18, name: "Babysitter", image: Plumber.src },
  { id: 19, name: "Cleaner", image: Driver.src },
  { id: 20, name: "Mechanic", image: Driver.src },
  { id: 21, name: "Maid", image: Plumber.src },
  { id: 22, name: "Security Guard", image: Driver.src },
  { id: 23, name: "Painter", image: Driver.src },
];

export const products = [
  {
    id: 1,
    name: "Maybelline",
     description: "Lorem ipsum dolor sit amet, consectetur",
     type:"product",
    image: Product.src,
    brand: "Maybelline",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Fossil",
     description: "Lorem ipsum dolor sit amet, consectetur",
     type:"product",
    image: Product2.src,
    brand: "Fossil",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Rayban",
     description: "Lorem ipsum dolor sit amet, consectetur",
     type:"product",
    image: Product.src,
    brand: "Rayban",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Allensolly",
     description: "Lorem ipsum dolor sit amet, consectetur",
     type:"product",
    image: Product2.src,
    brand: "Allensolly",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Allensolly",
     description: "Lorem ipsum dolor sit amet, consectetur",
     type:"product",
    image: Product.src,
    brand: "Allensolly",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 6,
    name: "Allensolly",
     description: "Lorem ipsum dolor sit amet, consectetur",
     type:"product",
    image: Product2.src,
    brand: "Allensolly",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 7,
    name: "Allensolly",
     description: "Lorem ipsum dolor sit amet, consectetur",
     type:"product",
    image: Product.src,
    brand: "Allensolly",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 8,
    name: "Allensolly",
     description: "Lorem ipsum dolor sit amet, consectetur",
     type:"product",
    image: Product2.src,
    brand: "Allensolly",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
  },
];
