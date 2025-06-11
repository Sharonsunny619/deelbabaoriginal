 
export interface Product {
 id: number;
  name: string;
  description?: string;
  price?: number;
  brand?:string
  originalPrice?: number;
  discount: number;
  rating?: number;
  type?: string;
  image: string;
}