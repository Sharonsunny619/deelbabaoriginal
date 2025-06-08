import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import QRcode from "./images/images.png";
import Deelbaba from "../header/images/deelbaba";
import { RootState } from "@/app/lib/store";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

interface DialogpaymentAProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  paymentMethod: string;
}

export default function Dialogpayment({
  open,
  setOpen,
  paymentMethod,
}: DialogpaymentAProps) {
  const [upiInput, setUpiInput] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolderName, setCardHolderName] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [netBanking, setNetBanking] = useState<string>("");
  const [saveCard, setSaveCard] = useState<boolean>(false);
  const [isPayCLicked, setisPayCLicked] = useState(false);
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = cartItems.length > 0 ? 2100 : 0;
  const delivery = 0;
  const total = subtotal - discount + delivery;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 w-[380px] overflow-hidden rounded-2xl -mb-4 bg-white">
        <DialogHeader className="py-2 px-8 bg-white shadow-lg">
          <Deelbaba
            colorA={"#689567"}
            colorB={"#A6E8A4"}
            width={"90"}
            height={"40"}
          />
        </DialogHeader>

        {paymentMethod === "upi" && isPayCLicked === false ? (
          <div className="bg-white text-start px-6 pt-2 pb-2 h-[380px]">
            <p className="text-[14px] font-semibold underline">
              Pay With UPI QR
            </p>
            <div className="my-3 flex justify-center">
              <Image
                src={QRcode}
                alt={"QRcode"}
                width={120}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center font-semibold">
              Scan The QR Using Any UPI App On Your Phone
            </p>
            <div className="my-2 flex justify-center gap-2">
              <span className="text-sm">🟣</span>
              <span className="text-sm">💳</span>
              <span className="text-sm">📲</span>
            </div>
            <p className="text-[12px] text-black font-[500] text-center">
              QR Code Is Valid For <br />
              <span className="text-red-600">11:17</span> Minutes
            </p>

            <div className="mt-4 text-left space-y-1">
              <p className="text-sm font-semibold mb-3 underline">
                Pay With Phone Number/UPI ID
              </p>
              <div className="group relative">
                <label
                  htmlFor="upi-input"
                  className="origin-center text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 left-0 -translate-y-1/2 cursor-text px-4 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:left-0 group-focus-within:-translate-x-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:left-0 has-[+input:not(:placeholder-shown)]:-translate-x-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
                >
                  <span className="bg-white whitespace-nowrap inline-flex px-0 text-[#212121] font-[530]">
                    Enter UPI ID / Mobile Number
                  </span>
                </label>
                <div className="flex items-center">
                  <Input
                    id="upi-input"
                    value={upiInput}
                    onChange={(e) => setUpiInput(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="h-10 w-full text-sm pr-16"
                  />
                  <span className="absolute right-4 text-xs text-muted-foreground">
                    @okaxis
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : paymentMethod === "card" && isPayCLicked === false ? (
          <div className="bg-white text-start px-6 pt-2 pb-2 space-y-4 h-[380px]">
            <p className="text-[14px] font-semibold underline">Pay With Card</p>

            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="col-span-2 group relative">
                <label
                  htmlFor="card-number"
                  className="origin-center text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 left-0 -translate-y-1/2 cursor-text px-4 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:left-0 group-focus-within:-translate-x-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:left-0 has-[+input:not(:placeholder-shown)]:-translate-x-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
                >
                  <span className="bg-white whitespace-nowrap inline-flex px-0 text-[#212121] font-[530]">
                    Card Number
                  </span>
                </label>
                <Input
                  id="card-number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  type="text"
                  placeholder=" "
                  className="h-10 w-full text-sm pr-4"
                />
              </div>

              <div className="group relative">
                <label
                  htmlFor="expiry"
                  className="origin-center text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 left-0 -translate-y-1/2 cursor-text px-4 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:left-0 group-focus-within:-translate-x-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:left-0 has-[+input:not(:placeholder-shown)]:-translate-x-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
                >
                  <span className="bg-white whitespace-nowrap inline-flex px-0 text-[#212121] font-[530]">
                    Expiry
                  </span>
                </label>
                <Input
                  id="expiry"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  type="text"
                  placeholder=" "
                  className="h-10 w-full text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="col-span-2 group relative">
                <label
                  htmlFor="card-holder"
                  className="origin-center text BASICmuted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 left-0 -translate-y-1/2 cursor-text px-4 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:left-0 group-focus-within:-translate-x-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:left-0 has-[+input:not(:placeholder-shown)]:-translate-x-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
                >
                  <span className="bg-white whitespace-nowrap inline-flex px-0 text-[#212121] font-[530]">
                    Card Holder&#39;s name
                  </span>
                </label>
                <Input
                  id="card-holder"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                  type="text"
                  placeholder=" "
                  className="h-10 w-full text-sm pr-4"
                />
              </div>

              <div className="group relative">
                <label
                  htmlFor="cvv"
                  className="origin-center text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 left-0 -translate-y-1/2 cursor-text px-4 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:left-0 group-focus-within:-translate-x-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:left-0 has-[+input:not(:placeholder-shown)]:-translate-x-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
                >
                  <span className="bg-white whitespace-nowrap inline-flex px-0 text-[#212121] font-[530]">
                    CVV
                  </span>
                </label>
                <Input
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  type="text"
                  placeholder=" "
                  className="h-10 w-full text-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 my-1">
              <input
                id="save-card"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
              />
              <label
                htmlFor="save-card"
                className="text-xs text-[#212121] font-medium"
              >
                Save Card Securely For Future Payment
              </label>
            </div>

            <hr className="my-8" />

            <div className="group relative">
              <label
                htmlFor="net-banking"
                className="origin-center text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 left-0 -translate-y-1/2 cursor-text px-4 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:left-0 group-focus-within:-translate-x-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:left-0 has-[+input:not(:placeholder-shown)]:-translate-x-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
              >
                <span className="bg-white whitespace-nowrap inline-flex px-0 text-[#212121] font-[530]">
                  Net Banking
                </span>
              </label>
              <Input
                id="net-banking"
                value={netBanking}
                onChange={(e) => setNetBanking(e.target.value)}
                type="text"
                placeholder=" "
                className="h-10 w-full text-sm"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[470px] space-y-6">
             <div className="relative flex items-center justify-center">
              <div className="absolute h-[200px] w-[200px] rounded-full bg-[#f2f9f3] flex items-center justify-center z-0" />
              <div className="absolute h-[170px] w-[170px] rounded-full bg-[#d3e4d0] flex items-center justify-center z-10" />
              <div className="absolute h-[140px] w-[140px] rounded-full bg-[#a8cda9] flex items-center justify-center z-20" />
              <div className="relative z-30 h-[110px] w-[110px] rounded-full bg-[#81B480] flex items-center justify-center">
                <Check
                  className="h-[80px] w-[80px] text-white"
                  strokeWidth={3}
                />
              </div>
            </div>

            <p className="text-lg font-semibold text-[#212121] mt-10">
              Payment Successful
            </p>

            <button
              onClick={() => router.push("/home")}
              className="px-6 py-2 mt-3 bg-[#81B480] text-white rounded-full text-sm hover:bg-black transition duration-300 active:scale-90 cursor-pointer"
            >
              Back To Home
            </button>
          </div>
        )}

        {isPayCLicked === false && (
          <div className="mt-10 flex justify-between items-center bg-[#689567] text-white px-4 py-3">
            <div className="flex flex-col">
              <span className="font-semibold text-lg">
                ₹{total.toLocaleString()}
              </span>
              <p className="text-[11px] -mt-[6px]">View Details</p>
            </div>
            <Button
              onClick={() => setisPayCLicked(true)}
              className="bg-white text-[#000] rounded-full hover:bg-gray-100 font-bold w-[200px] transition duration-300 active:scale-95 cursor-pointer"
            >
              Pay Now
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
