"use client";
import React, { useState } from "react";
import Address from "@/components/payment_page/address";
import { CreditCard, MapPin, ShoppingBag } from "lucide-react";
import Deelbaba from "@/components/header/images/deelbaba";
import { useRouter } from "next/navigation";
import SelectPayment from "@/components/payment_page/select_payment";

export default function Payment() {
  const [step, setStep] = useState<"BAG" | "ADDRESS" | "PAYMENT">("ADDRESS");
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();
  const handleContinue = () => {
    if (step === "ADDRESS") {
      setStep("PAYMENT");
    }
  };

  return (
    <div className="px-0">
      <div
        className="flex items-center cursor-pointer "
        onClick={() => router.push("/home")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Deelbaba
          colorA={isHovered ? "#A6E8A4" : "#689567"}
          colorB={isHovered ? "#689567" : "#A6E8A4"}
        />
      </div>
         <div className="flex flex-col sm:flex-row items-center justify-center mb-8 gap-4 sm:gap-6">
         <div className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <ShoppingBag
                className={`w-5 h-5 ${
                  step === "BAG" || step === "ADDRESS" || step === "PAYMENT"
                    ? "text-[#689567]"
                    : "text-[#969696]"
                }`}
              />
            </div>
            <span
              className={`text-xs sm:text-sm tracking-[2px] font-bold mt-1 ${
                step === "BAG" || step === "ADDRESS" || step === "PAYMENT"
                  ? "text-[#689567]"
                  : "text-[#969696]"
              }`}
            >
              BAG
            </span>
          </div>
          <div
            className={`hidden sm:block border-b border-dashed w-20 mx-3 ${
              step === "ADDRESS" || step === "PAYMENT"
                ? "border-[#689567]"
                : "border-gray-300"
            }`}
          />
        </div>

          <div className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <MapPin
                className={`w-5 h-5 ${
                  step === "ADDRESS" || step === "PAYMENT"
                    ? "text-[#689567]"
                    : "text-[#969696]"
                }`}
              />
            </div>
            <span
              className={`text-xs sm:text-sm tracking-[2px] font-bold mt-1 ${
                step === "ADDRESS" || step === "PAYMENT"
                  ? "text-[#689567]"
                  : "text-[#969696]"
              }`}
            >
              ADDRESS
            </span>
          </div>
          <div
            className={`hidden sm:block border-b border-dashed w-20 mx-3 ${
              step === "PAYMENT" ? "border-[#689567]" : "border-gray-300"
            }`}
          />
        </div>

         <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <CreditCard
              className={`w-5 h-5 ${
                step === "PAYMENT" ? "text-[#689567]" : "text-[#969696]"
              }`}
            />
          </div>
          <span
            className={`text-xs sm:text-sm tracking-[2px] font-bold mt-1 ${
              step === "PAYMENT" ? "text-[#689567]" : "text-[#969696]"
            }`}
          >
            PAYMENT
          </span>
        </div>
      </div>

       {step === "ADDRESS" && <Address onContinue={handleContinue} />}
      {step === "PAYMENT" && <SelectPayment />}
    </div>
  );
}
