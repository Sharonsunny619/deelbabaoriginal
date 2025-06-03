import { StaticImageData } from "next/image";


export interface CategoryType {
  id: number;
  name: string;
  image: string;
}



export interface Category {
  id: number;
  name: string;
  image: StaticImageData; 
}