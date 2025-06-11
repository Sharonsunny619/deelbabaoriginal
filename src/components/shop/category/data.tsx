import Image from "next/image";
import Bosch from "./images/boschimage.png"
import Wheel from "./images/wheelimage.png"
import Motul from "./images/motulimage.png"
import OilPump from "./images/oilpumpimage.png"
import Flat50 from "./images/flatoffer.webp"
import { Category } from "./interface";
import CarTab from "./images/cartab.png";
import BikeTab from "./images/biketab.png";
import Wheeltab from "./images/wheeltab.png";
import EngineTab from "./images/enginetab.png";
import CarWashTab from "./images/carwashtab.png";


export const products = [
  {
    id: 1,
    name: "Bosch",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Bosch.src
  },
  {
    id: 2,
    name: "Motul",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Motul.src
  },
  {
    id: 3,
    name: "Wheel",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Wheel.src
  },
  {
    id: 4,
    name: "OilPump",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.8,
     type: "product",
    image: OilPump.src
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
    image: Bosch.src
  },
   
   {
    id: 6,
    name: "Bosch",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Bosch.src
  },
  {
    id: 7,
    name: "Motul",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Motul.src
  },
  {
    id: 8,
    name: "Wheel",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Wheel.src
  },
   {
    id: 9,
    name: "OilPump",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.8,
     type: "product",
    image: OilPump.src
  },
  {
    id: 10,
    name: "Maybelline",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 119,
    originalPrice: 149,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Bosch.src
  },
  {
    id: 11,
    name: "Adidas Outlet",
    discount: 50,
    image: Flat50.src,
    type: "banner",
  },
    {
    id: 12,
    name: "Adidas Outlet",
    discount: 50,
    image: Flat50.src,
    type: "banner",
  },
    {
    id: 13,
    name: "Adidas Outlet",
    discount: 50,
    image:Flat50.src,
    type: "banner",
  },
  {
    id: 14,
    name: "Bosch",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.8,
     type: "product",
    image: OilPump.src
  },
   {
    id: 15,
    name: "Bosch",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Bosch.src
  },
  {
    id: 16,
    name: "Motul",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Motul.src
  },
  {
    id: 17,
    name: "Wheel",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Wheel.src
  },
  {
    id: 18,
    name: "Bosch",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.8,
     type: "product",
    image: OilPump.src
  },
    {
    id: 19,
    name: "Motul",
    description: "Lorem ipsum dolor sit amet, consectetur",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.5,
     type: "product",
    image: Motul.src
  },
];

export const tabcategories: Category[] = [
  {
    id: 1,
    name: "Car Spare Parts",
    image: CarTab,
  },
  {
    id: 2,
    name: "Bike Spare Parts",
    image: BikeTab,
  },
  {
    id: 3,
    name: "Accessories",
    image: Wheeltab,
  },
  {
    id: 4,
    name: "Lubrications",
    image: EngineTab,
  },
  {
    id: 5,
    name: "Vehicle Wash",
    image: CarWashTab,
  },
];