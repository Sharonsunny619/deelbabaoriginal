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
    image: dress.src
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
    image: glass.src
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
    image: watch.src
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
    image: lipstick.src
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
    image: dress.src
  },
   {
    id: 6,
    name: "Adidas Outlet",
    discount: 50,
    image: productbanner2.src,
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
    image: dress.src
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
    image: glass.src
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
    image: watch.src
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
    image: lipstick.src
  },
  {
    id: 11,
    name: "Nike Sale",
    discount: 40,
    image:productbanner1.src,
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
    image: dress.src
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
    image: glass.src
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
    image: watch.src
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
    image: lipstick.src
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
    image: glass.src
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