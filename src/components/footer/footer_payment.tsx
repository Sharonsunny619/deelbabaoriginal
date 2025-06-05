import React from 'react'
 import Link from "next/link";

import Deelbaba from "../header/images/deelbaba";
import { socialLinks } from "./data";
import Image from 'next/image';
 import MasterCard from "./images/mastercard.png"
 import JCB from "./images/jcb.png"
 import VISA from "./images/visa.png"
 import AMEX from "./images/amex.png"





export default  function FooterPayment() {
  return (
      <footer className={`bg-[#596F5B] text-white w-full fixed bottom-0`}>
      <div className="max-w-10/12 mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {/* Brand Section */}
          <div className="lg:col-span-1 pt-10   gap-5 flex flex-col items-start justify-center">
            <div className="flex items-center  ">
              <Deelbaba colorA={"#689567"} colorB={"#A6E8A4"} />
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      social.label === "Facebook"
                        ? "bg-white "
                        : "bg-transparent"
                    } hover:scale-110 rounded-lg border-none shadow-none p-0`}
                  >
                    <Link href={social.href} aria-label={social.label}>
                      {social.icon}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

           


         
         <div className="lg:col-span-1 flex items-center justify-end gap-20 mt-5">
  <div className="w-[90px] h-[55px]">
    <Image
      src={MasterCard}
      alt="MasterCard"
      width={60}
      height={60}
      className="object-cover rounded-md w-full h-full"
    />
  </div>
  <div className="w-[90px] h-[55px]">
    <Image
      src={VISA}
      alt="VISA"
      width={60}
      height={60}
      className="object-cover rounded-md w-full h-full"
    />
  </div>
  <div className="w-[90px] h-[55px]">
    <Image
      src={JCB}
      alt="JCB"
      width={60}
      height={60}
      className="object-cover rounded-md w-full h-full"
    />
  </div>
  <div className="w-[90px] h-[55px]">
    <Image
      src={AMEX}
      alt="AMEX"
      width={60}
      height={60}
      className="object-cover rounded-md w-full h-full"
    />
  </div>
</div>
         

         
        </div>
      </div>
      <div className="flex p-1 flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-white">
          © {new Date().getFullYear()} Deelbaba. All rights reserved.
        </div>

        <div className="text-sm text-white">
          <span className="underline">Developed</span> By{" "}
          <Link
            href="#"
            className="text-white underline hover:text-blue-400 transition-colors"
          >
            Batheco
          </Link>
        </div>
      </div>
    </footer>
  )
}


