"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
 import { RootState } from "@/app/lib/store";
import Dialogpayment from "./dialog_payment";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export default function SelectPayment() {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [open, setOpen] = useState(false);

   
  const cartItems = useSelector((state: RootState) => state.cart.items);

   
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = cartItems.length > 0 ? 2100 : 0;  
  const delivery = 0;  
  const total = subtotal - discount + delivery;

  return (
    <>
      <div className="min-h-full bg-[#fdfdf1] flex items-start justify-center px-6 py-10">
        <div className="w-full max-w-8/12 flex flex-col md:flex-col justify-between gap-10">
          <h1 className="text-3xl font-bold -mb-3">Select Payment option</h1>
          <div className="grid grid-cols-3 gap-10">
            <div className="w-full col-span-2 space-y-6">
              <div className="p-4 bg-white border-[#A6A6A6] border rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-black">Bank Offer</span>
                  <br />
                  10% Instant Offer On SBI Credit Card On A Min Spend Rs 2000
                  TCA
                </p>
              </div>

              <div className="p-5 bg-white border rounded-xl">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="divide-y divide-gray-200"
                >
                  <Label
                    htmlFor="upi"
                    className="flex items-center text-[20px] font-medium px-4 py-4 gap-3 cursor-pointer"
                  >
                    <RadioGroupItem value="upi" id="upi" />
                    UPI
                  </Label>
                  <Label
                    htmlFor="card"
                    className="flex items-center text-[20px] font-medium px-4 py-4 gap-3 cursor-pointer"
                  >
                    <RadioGroupItem value="card" id="card" />
                    Card & Net Banking
                  </Label>
                  <Label
                    htmlFor="cod"
                    className="flex items-center text-[20px] font-medium px-4 py-4 gap-3 cursor-pointer"
                  >
                    <RadioGroupItem value="cod" id="cod" />
                    Cash On Delivery
                  </Label>
                </RadioGroup>
              </div>

              <Button
                className="bg-[#689567] hover:bg-black w-full h-12 font-bold cursor-pointer active:scale-95"
                onClick={() => setOpen(true)}
              >
                Continue
              </Button>
            </div>

            <div className="w-full self-start py-3 bg-white border rounded-xl">
              <div className="p-6 space-y-2">
                <h3 className="text-sm text-[#212121] font-semibold">
                  PRICE DETAILS{" "}
                  <span className="text-xs text-muted-foreground">
                    ({cartItems.length} Items)
                  </span>
                </h3>
                <div className="flex justify-between text-sm">
                  <span>Amount</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-red-500">
                  <span>Discount</span>
                  <span>₹{discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between text-[17px] font-bold">
                  <span>GRAND TOTAL</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-muted-foreground -mt-2">
                  PRICES INCLUDE GST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialogpayment open={open} setOpen={setOpen} paymentMethod={paymentMethod}/>
    </>
  );
}