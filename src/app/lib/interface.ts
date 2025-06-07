  interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description?:string;
  quantity: number;
  size?: string; 
}

  interface CartState {
  items: CartItem[];
}

 