// src/app/cart/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2 } from "lucide-react";
import { RootState } from "@/app/lib/store";
import { removeFromCart, updateQuantity } from "@/app/lib/cartSlice";
import CartEmpty from "./images/cartempty.png";
import { useRouter } from "next/navigation";
import FeaturedProducts from "../shop/category/detail/product_carousal";
import PromoCarousel from "../home/promo_carousal";
   
const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();

  const subtotal: number = cartItems.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    0
  );
  const discount: number = 200;
  const delivery: number = 0;
  const total: number = subtotal - discount + delivery;

  const handleQuantityChange = (id: number, quantity: string) => {
    dispatch(updateQuantity({ id, quantity: Number(quantity) }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
   <>
      <div className="min-h-screen bg-[#fffff5] flex justify-center py-8 px-4 ">
        {cartItems.length === 0 ? (
          <div className=" py-20 flex flex-col items-center justify-start">
            <Image
              src={CartEmpty}
              alt={"Emprty Image"}
              width={120}
              height={120}
              className="object-cover rounded-md"
            />
            <p className="text-[36px] font-bold mt-20">
              {" "}
              Your Deelbaba Cart is Empty!
            </p>
            <p className="font-[510] text-[18px] text-[#212121]">
              Add Something To Your Bag And Enjoy Your Shoping
            </p>
  
            <Button
              onClick={() => router.push("/shop")}
              className="group mt-10 relative h-10 overflow-hidden rounded-full bg-[#689567] text-white px-8 py-2 cursor-pointer transition active:scale-95"
            >
              <span className="relative z-10 font-bold"> Back to Shopping </span>
              <span className="absolute inset-0 overflow-hidden rounded-lg">
                <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full  bg-black transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </Button>
          </div>
        ) : (
          <div className="max-w-full w-full flex flex-col items-center justify-center">
            {/* Cart Items Section */}
            <h1 className="text-3xl font-bold mb-4 text-start">YOUR CART</h1>
            <div className="grid grid-cols-3 gap-12 max-w-7xl ">
              <div className="space-y-4 col-span-2 ">
                {cartItems.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-3 p-4  rounded-3xl bg-white border-[1px]"
                    >
                      <div className="w-full h-[250px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-full"
                        />
                      </div>
                      <div className="flex-1 p-4 col-span-2 ml-4 border-l-[1px]">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-sm text-gray-500">
                              Lorem Ipsum Color Support, Consecutive Adipiscing
                              Elit
                            </p>
  
                            <p className="-mb-2 text-lg line-through text-red-600 font-bold mt-1">
                              ₹{(item.price + 1000).toLocaleString()}
                            </p>
                            <p className="text-lg font-bold mt-1">
                              ₹{item.price.toLocaleString()}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveItem(item.id)}
                            className="transition duration-300 active:scale-90 cursor-pointer hover:text-red-500 hover:bg-transparent hover:scale-125"
                          >
                            <Trash2 className="w-5 h-5  " />
                          </Button>
                        </div>
                        <div className="flex flex-col items-start gap-2 mt-2">
                         <p>Size:<span>UK 5</span></p>
                          <Select
                            value={item.quantity.toString()}
                            onValueChange={(value) =>
                              handleQuantityChange(item.id, value)
                            }
                          >
                            <SelectTrigger className="w-20 cursor-pointer">
                              <SelectValue placeholder="Qty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
  
                            </SelectContent>
                          </Select>
                        </div>
                        <p
                          className={`text-sm mt-2 ${
                            item.quantity > 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {item.quantity > 0 ? "In Stock" : "Out of Stock"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
  
              <div className="w-full md:w-80 ">
                <Card className="p-4 bg-transparent border-none shadow-none">
                  <h2 className="text-xl font-bold mb-4">ORDER DETAILS</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Items</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>You Saved</span>
                      <span>-₹{discount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <span className={delivery === 0 ? "text-green-600" : ""}>
                        {delivery === 0
                          ? "FREE"
                          : `₹${delivery.toLocaleString()}`}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                      <span>GRAND TOTAL</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-gray-500 -mt-2">
                      Price Inclusive of GST
                    </div>
                  </div>
                  <Button
                    className="w-full font-bold mt-4 bg-[#689567] hover:bg-[#000] cursor-pointer transition duration-300 active:scale-90 text-white"
                    disabled={cartItems.length === 0}
                    onClick={() => router.push("/payment-page") }  
                  >
                    PLACE ORDER
                  </Button>
                </Card>
              </div>
            </div>
          <div className="max-w-11/12">  <FeaturedProducts/></div>
          </div>
        )}
      
       </div>
       <PromoCarousel />
   </>
  );
};

export default Cart;
