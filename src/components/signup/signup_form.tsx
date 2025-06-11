"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "../footer/page";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen bg-[#fdfdee]">
      <div className="flex-grow flex justify-center items-center ">
        <div className="bg-[#fff] lg:my-2 my-10 md:h-[500px] lg:h-[550px] lg:mx-2 mx-5 w-full lg:w-[750px] rounded-xl shadow-lg">
          <div className="bg-[#689567]  h-[200px] flex flex-col items-center justify-center  rounded-t-xl rounded-b-full">
            <p className="text-[50px] sm:text-[60px] md:text-[120px] -mt-12 text-white/5">
              Deelbaba
            </p>
            <p className="text-[30px] -mt-16 md:-mt-28 text-white">Sign Up</p>
          </div>
          <div className="flex flex-col items-center justify-center my-5 lg:my-10">
                     <div className="group relative">
              <label
                htmlFor="id"
                className="origin-center text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-text px-1 text-[12px] md:text-[14px] transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:left-1/2 group-focus-within:-translate-x-1/2 group-focus-within:cursor-default group-focus-within:text-[12px] md:group-focus-within:text-[14px] group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:left-1/2 has-[+input:not(:placeholder-shown)]:-translate-x-1/2 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-[12px] md:has-[+input:not(:placeholder-shown)]:text-[14px] has-[+input:not(:placeholder-shown)]:font-medium"
              >
                <span className="bg-white inline-flex whitespace-nowrap">
                  Enter Email Or Phone Number
                </span>
              </label>
              <Input
                id="id"
                type="email"
                placeholder=" "
                className="h-10 w-full md:w-[400px] placeholder:text-[12px] md:placeholder:text-[14px]"
              />
            </div>
            <Button className="group font-[700] text-[14px]  relative h-9 my-5 lg:my-7 mx-7 overflow-hidden rounded-sm bg-[#689567] text-white px-16 md:px-41 py-4 cursor-pointer transition active:scale-95">
              Send OTP
            </Button>
            <p className="text-[12px] md:text-[14px] font-[570] text-center">
              By continuing, you agree to deelbaba&#39;s{" "}
              <span className="text-[#689567]">term of use</span> and{" "}
              <span className="text-[#689567]">privecy policy.</span>
            </p>{" "}
            <div className="flex items-center gap-4 w-full my-4">
              <div className="flex-grow border-t border-gray-300" />
              <p className="text-[16px] font-semibold whitespace-nowrap">
                Existing User ?
              </p>
              <div className="flex-grow border-t border-gray-300" />
            </div>
            <Button
              onClick={() => router.push("/signup")}
              className="group font-[700] text-[14px]  relative h-9 my-2 lg:my-7 mx-7 overflow-hidden rounded-sm bg-white hover:bg-[#689567] border border-[#689567] hover:border-white hover:text-white text-[#689567] px-8  md:px-18 py-4 cursor-pointer transition active:scale-95"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
      <Footer type="custom" />
    </div>
  );
}
