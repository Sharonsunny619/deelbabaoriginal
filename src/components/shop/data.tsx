import fashion from "./images/dress.png";
import mobile from "./images/phone.png";
import electronics from "./images/electronics.png";
import appliances from "./images/appliances.png";
import beauty from "./images/beauty.png";
import hardware from "./images/vehicle.png";
import spare from "./images/repair.png";
import Image from "next/image";
import dress from "./images/productshirt.jpg";
import glass from "./images/productglass.jpg";
import watch from "./images/productwatch.jpg";
import lipstick from "./images/productlipstick.jpg";
import productbanner1 from "./images/productbanner1.jpg";
import productbanner2 from "./images/productbanner2.jpg";



export const categories = [
  { id: 1, name: "Fashion", image: fashion.src },
  { id: 2, name: "Mobiles", image: mobile.src },
  { id: 3, name: "Electronics", image: electronics.src },
  { id: 4, name: "Appliances", image: appliances.src },
  { id: 5, name: "Beauty & Health", image: beauty.src },
  { id: 6, name: "Hardwares", image: hardware.src },
  { id: 7, name: "Spare Parts", image: spare.src },
];


export const products = [
  {
    id: 1,
    name: "Fossil",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={dress}
        alt="dress"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 2,
    name: "Rayban",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={glass}
        alt="glass"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 3,
    name: "Allensolly",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={watch}
        alt="watch"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 4,
    name: "Bosch",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.8,
     type: "product",
    image: (
      <Image
        src={lipstick}
        alt="lipstick"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 5,
    name: "Maybelline",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 119,
    originalPrice: 149,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={dress}
        alt="dress"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
   {
    id: 6,
    name: "Adidas Outlet",
    discount: 50,
    image: (
       <Image
        src={productbanner2}
        alt="productbanner2"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
    type: "banner",
  },
   {
    id: 7,
    name: "Fossil",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={dress}
        alt="dress"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 8,
    name: "Rayban",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={glass}
        alt="glass"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 9,
    name: "Allensolly",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={watch}
        alt="watch"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 10,
    name: "Bosch",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.8,
     type: "product",
    image: (
      <Image
        src={lipstick}
        alt="lipstick"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 11,
    name: "Nike Sale",
    discount: 40,
    image: (
       <Image
        src={productbanner1}
        alt="productbanner1"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
    type: "banner",
  },
   {
    id: 12,
    name: "Fossil",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={dress}
        alt="dress"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 13,
    name: "Rayban",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={glass}
        alt="glass"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 14,
    name: "Allensolly",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={watch}
        alt="watch"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
  {
    id: 15,
    name: "Bosch",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.8,
     type: "product",
    image: (
      <Image
        src={lipstick}
        alt="lipstick"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
    {
    id: 16,
    name: "Rayban",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: (
      <Image
        src={glass}
        alt="glass"
           fill={true}
        className="object-cover rounded-[22px]"
      />
    ),
  },
];

export const filterData = [
  {
    name: "Category",
    value: "category",
    options: [
      { value: "all", label: "All" },
      { value: "electronics", label: "Electronics" },
      { value: "clothing", label: "Clothing" },
    ],
  },
  {
    name: "Type",
    value: "type",
    options: [
      { value: "all", label: "All" },
      { value: "accessories", label: "Accessories" },
      { value: "tools", label: "Tools" },
    ],
  },
  {
    name: "Price",
    value: "price",
    options: [
      { value: "all", label: "All" },
      { value: "0-1000", label: "0 - 1000" },
      { value: "1000-2000", label: "1000 - 2000" },
      { value: "2000-3000", label: "2000 - 3000" },
    ],
  },
  {
    name: "Gender",
    value: "gender",
    options: [
      { value: "all", label: "All" },
      { value: "men", label: "Men" },
      { value: "women", label: "Women" },
    ],
  },
  {
    name: "Size",
    value: "size",
    options: [
      { value: "all", label: "All" },
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  },
  {
    name: "Colour",
    value: "colour",
    options: [
      { value: "all", label: "All" },
      { value: "black", label: "Black" },
      { value: "white", label: "White" },
      { value: "blue", label: "Blue" },
    ],
  },
];