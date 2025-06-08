import React from "react";
import Link from "next/link";

import Deelbaba from "../header/images/deelbaba";
import { footerSections, socialLinks } from "./data";


export default function Footer({type}:{type?:string}) {
 

  return (
    <footer className={`bg-[#596F5B] text-white w-full ${type==="custom"?"relative -mb-20":""}`}>
      <div className="container mx-auto px-4 py-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 ">
          {/* Brand Section */}
          <div className="lg:col-span-1 gap-5 flex flex-col items-center lg:items-start justify-center">
            <div className="flex items-center mb-4">
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

       {/* Footer Links Sections */}
{footerSections.map((section, index) => (
  <div key={index} className="lg:col-span-1 text-center lg:text-left flex flex-col items-center lg:items-start">
    <h3 className="font-bold text-[18px] mb-4 text-[#A6E7A4]">
      {section.title}
    </h3>
    <ul className="space-y-2">
      {section.links.map((link, linkIndex) => (
        <li key={linkIndex}>
          <Link
            href={link.href}
            className="text-sm text-white hover:text-gray-400 transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
))}

{/* Contact Information */}
<div className="lg:col-span-1 flex lg:flex-row flex-col  items-center lg:items-start text-center lg:text-left">
  <div className="h-full bg-[#FFFFFF] w-[2px] mt-4 lg:flex hidden" />
  <div className="mt-4 md:mt-0 ml-0 lg:ml-16">
    <h3 className="font-bold text-[18px] mb-4 text-[#A6E7A4]">
      MAIL US
    </h3>
    <p className="text-sm text-white">deelbaba@gmail.com</p>
  </div>
</div>

<div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-6 md:mt-0">
  <h3 className="font-bold text-[18px] mb-4 text-[#A6E7A4] uppercase">
    Office Address
  </h3>
  <p className="text-sm text-white">
    Lorem Ipsum Dolor Sit Amet,<br />
    Consectetur Adipiscing Elit,<br />
    Sed Do Eiusmod Tempor
  </p>
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
  );
}