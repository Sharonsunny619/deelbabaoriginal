  interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string; 
}

  interface CartState {
  items: CartItem[];
}

 