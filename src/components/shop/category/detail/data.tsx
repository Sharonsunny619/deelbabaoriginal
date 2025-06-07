import Image from "next/image";
import Flat50 from "../images/flatoffer.webp";

export const reviews = [
  {
    name: "Andrea Luiz",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "Andrea Luiz",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "Andrea Luiz",
    rating: 3.5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "Andrea Luiz",
    rating: 3.5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
export const sizes = ["4", "4.5", "5", "5.5", "6", "7", "8", "9", "10"];

export const AdData = [
  {
    id: 1,
    name: "Adidas Outlet",
    discount: 50,
    image: (
      <Image src={Flat50} alt="Flat50" fill={true} className="object-contain" />
    ),
    type: "banner",
  },
  {
    id: 2,
    name: "Adidas Outlet",
    discount: 50,
    image: (
      <Image src={Flat50} alt="Flat50" fill={true} className="object-contain" />
    ),
    type: "banner",
  },
  {
    id: 3,
    name: "Adidas Outlet",
    discount: 50,
    image: (
      <Image
        src={Flat50}
        alt="Flat50"
        fill={true}
        className="object-contain rounded-none"
      />
    ),
    type: "banner",
  },
];
