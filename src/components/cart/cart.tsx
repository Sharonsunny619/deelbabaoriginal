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
      <div className="min-h-screen bg-[#fffff5] flex justify-center py-4 sm:py-8 px-4">
        {cartItems.length === 0 ? (
          <div className="py-12 sm:py-20 flex flex-col items-center justify-start">
            <Image
              src={CartEmpty}
              alt="Empty Cart"
              width={100}
              height={100}
              className="object-cover rounded-md w-24 h-24 sm:w-32 sm:h-32"
            />
            <p className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-12 text-center">
              Your Deelbaba Cart is Empty!
            </p>
            <p className="font-medium text-sm sm:text-lg text-[#212121] text-center mt-2">
              Add Something To Your Bag And Enjoy Your Shopping
            </p>
            <Button
              onClick={() => router.push("/shop")}
              className="group mt-6 sm:mt-10 relative h-10 overflow-hidden rounded-full bg-[#689567] text-white px-6 sm:px-8 py-2 cursor-pointer transition active:scale-95 text-sm sm:text-base"
            >
              <span className="relative z-10 font-bold">Back to Shopping</span>
              <span className="absolute inset-0 overflow-hidden rounded-lg">
                <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-black transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </Button>
          </div>
        ) : (
          <div className="max-w-[90rem] w-full flex flex-col items-center justify-center">
            {/* Cart Items Section */}
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-start w-full max-w-7xl">
              YOUR CART
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full">
              <div className="space-y-4 lg:col-span-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 sm:grid-cols-3 p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-white border-[1px] gap-4"
                  >
                    <div className="w-full h-[200px] sm:h-[250px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="object-cover rounded-md w-full h-full"
                      />
                    </div>
                    <div className="flex-1 p-0 sm:p-4 sm:col-span-2 sm:border-l-[1px]">
                      <div className="flex flex-col sm:flex-row justify-between items-start">
                        <div className="w-full">
                          <h2 className="text-base sm:text-lg font-semibold">{item.name}</h2>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            Lorem Ipsum Color Support, Consecutive Adipiscing Elit
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <p className="text-sm sm:text-lg line-through text-red-600 font-bold">
                              ₹{(item.price + 1000).toLocaleString()}
                            </p>
                            <p className="text-sm sm:text-lg font-bold">
                              ₹{item.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(item.id)}
                          className="transition duration-300 active:scale-90 cursor-pointer hover:text-red-500 hover:bg-transparent hover:scale-125 mt-2 sm:mt-0"
                        >
                          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start gap-2 mt-3 sm:mt-4">
                        <p className="text-sm">
                          Size: <span>UK 5</span>
                        </p>
                        <Select
                          value={item.quantity.toString()}
                          onValueChange={(value) => handleQuantityChange(item.id, value)}
                        >
                          <SelectTrigger className="w-20 cursor-pointer text-sm">
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
                        className={`text-xs sm:text-sm mt-2 ${
                          item.quantity > 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {item.quantity > 0 ? "In Stock" : "Out of Stock"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full max-w-md lg:max-w-none lg:w-80">
                <Card className="p-4 bg-transparent border-none shadow-none">
                  <h2 className="text-lg sm:text-xl font-bold mb-4">ORDER DETAILS</h2>
                  <div className="space-y-2 text-sm sm:text-base">
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
                        {delivery === 0 ? "FREE" : `₹${delivery.toLocaleString()}`}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-base sm:text-lg border-t pt-2 mt-2">
                      <span>GRAND TOTAL</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Price Inclusive of GST
                    </div>
                  </div>
                  <Button
                    className="w-full font-bold mt-4 bg-[#689567] hover:bg-[#000] cursor-pointer transition duration-300 active:scale-90 text-white text-sm sm:text-base"
                    disabled={cartItems.length === 0}
                    onClick={() => router.push("/payment-page")}
                  >
                    PLACE ORDER
                  </Button>
                </Card>
              </div>
            </div>
            <div className="w-full mt-8">
              <FeaturedProducts />
            </div>
          </div>
        )}
      </div>
      <PromoCarousel />
    </>
  );
};

export default Cart;