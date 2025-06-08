"use client";
import React, { useState } from "react";
import Address from "@/components/payment_page/address";
 import Deelbaba from "@/components/header/images/deelbaba";
import { useRouter } from "next/navigation";
import SelectPayment from "@/components/payment_page/select_payment";
import ServiceAddress from "./service_address";
 
export default function ServicePayment({service}:{service:User}) {
   const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();
 

  return (
    <div>
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
      

       <ServiceAddress  service={service}/> 
     </div>
  );
}
